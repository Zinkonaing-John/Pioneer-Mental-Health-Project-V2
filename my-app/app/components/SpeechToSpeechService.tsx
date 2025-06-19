// components/SpeechToSpeechService.tsx
"use client"; // This component uses browser APIs, so it must be a client component

import React, { useState, useRef, useEffect, useCallback } from "react";

interface SpeechToSpeechServiceProps {
  onTranscription?: (text: string, language: string) => void;
  onTranslation?: (text: string, language: string) => void;
  targetLanguage: string; // e.g., 'ko-KR', 'en-US', 'my-MM'
  sourceLanguage?: string; // Optional: for explicit source language if not auto-detected
}

const SpeechToSpeechService: React.FC<SpeechToSpeechServiceProps> = ({
  onTranscription,
  onTranslation,
  targetLanguage,
  sourceLanguage,
}) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("Idle");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioQueueRef = useRef<ArrayBuffer[]>([]);
  const audioPlayingRef = useRef<boolean>(false);
  const currentStreamRef = useRef<MediaStream | null>(null);

  const setupWebSocket = useCallback(() => {
    // Connect to your Next.js API Route for the WebSocket
    // Use an absolute URL for production (e.g., process.env.NEXT_PUBLIC_API_URL)
    const wsUrl =
      process.env.NODE_ENV === "production"
        ? `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}/api/live-audio`
        : "ws://localhost:3000/api/live-audio";

    wsRef.current = new WebSocket(wsUrl);

    wsRef.current.onopen = () => {
      console.log("WebSocket connected");
      setStatus("Connected");
      // Send initial configuration to the backend (e.g., target language)
      wsRef.current?.send(
        JSON.stringify({ type: "config", targetLanguage, sourceLanguage })
      );
    };

    wsRef.current.onmessage = async (event) => {
      const data = event.data;
      if (typeof data === "string") {
        try {
          const message = JSON.parse(data);
          if (message.type === "transcription" && onTranscription) {
            onTranscription(message.text, message.language);
          } else if (message.type === "translation" && onTranslation) {
            onTranslation(message.text, message.language);
          }
          // Handle other messages like errors or status updates from backend
          setStatus(message.status || status);
        } catch (e) {
          console.warn(
            "Received non-JSON string message or malformed JSON:",
            data
          );
          // If it's not JSON, assume it's status or plain text output (unlikely for audio stream)
        }
      } else if (data instanceof Blob || data instanceof ArrayBuffer) {
        // This is where you receive the synthesized audio from the backend
        audioQueueRef.current.push(
          data instanceof Blob ? await data.arrayBuffer() : data
        );
        if (!audioPlayingRef.current) {
          playNextAudio();
        }
      }
    };

    wsRef.current.onclose = () => {
      console.log("WebSocket disconnected");
      setStatus("Disconnected");
      setIsRecording(false);
      currentStreamRef.current?.getTracks().forEach((track) => track.stop()); // Stop mic if connection drops
    };

    wsRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
      setStatus("Error");
    };
  }, [onTranscription, onTranslation, targetLanguage, sourceLanguage, status]); // Dependencies

  useEffect(() => {
    // Initialize WebSocket on component mount
    setupWebSocket();

    return () => {
      // Clean up WebSocket connection when component unmounts
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.close();
      }
      currentStreamRef.current?.getTracks().forEach((track) => track.stop()); // Stop microphone
    };
  }, [setupWebSocket]);

  const playNextAudio = async () => {
    if (audioQueueRef.current.length > 0 && !audioPlayingRef.current) {
      audioPlayingRef.current = true;
      const audioData = audioQueueRef.current.shift();

      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
      }

      try {
        // Decode the audio data. If your backend sends raw PCM, you might need to
        // create a BufferSource directly. If it sends WebM/Opus, decodeAudioData works.
        const audioBuffer = await audioContextRef.current.decodeAudioData(
          audioData as ArrayBuffer
        );
        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContextRef.current.destination);
        source.onended = () => {
          audioPlayingRef.current = false;
          playNextAudio(); // Play the next audio in the queue
        };
        source.start(0);
      } catch (error) {
        console.error("Error decoding or playing audio:", error);
        audioPlayingRef.current = false;
        playNextAudio(); // Try playing next even if one fails
      }
    }
  };

  const startRecording = async () => {
    try {
      if (wsRef.current?.readyState !== WebSocket.OPEN) {
        console.warn("WebSocket not open. Retrying connection...");
        await setupWebSocket(); // Attempt to reconnect if not open
        // Give it a moment to connect
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (wsRef.current?.readyState !== WebSocket.OPEN) {
          setStatus("Error: WebSocket not ready.");
          return;
        }
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      currentStreamRef.current = stream;

      // Recommended for sending raw audio bytes if your backend expects PCM direct from browser
      // This part is complex and often requires an AudioWorklet for efficient processing
      // For simplicity, let's stick with MediaRecorder for now, assuming backend handles transcoding
      // If you need raw PCM directly, consider a library like 'recorder-js' or an AudioWorklet.

      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "audio/webm; codecs=opus",
      }); // WebM/Opus is widely supported

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (
          event.data.size > 0 &&
          wsRef.current &&
          wsRef.current.readyState === WebSocket.OPEN
        ) {
          wsRef.current.send(event.data);
        }
      };

      mediaRecorderRef.current.start(250); // Send data every 250ms
      setIsRecording(true);
      setStatus("Recording...");
    } catch (err) {
      console.error("Error accessing microphone or starting recording:", err);
      setStatus(`Error: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
      setIsRecording(false);
      setStatus("Stopped");
      // Optionally send a 'stop' message to the backend if needed
      // wsRef.current?.send(JSON.stringify({ type: 'stop' }));
    }
  };

  return (
    <div className="speech-service-container">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        disabled={status === "Connecting..." || status.startsWith("Error")}
      >
        {isRecording ? "End Consultation" : "Start Consultation"}
      </button>
      <p>Status: {status}</p>
      {/* You can add more UI elements here to display transcription/translation */}
    </div>
  );
};

export default SpeechToSpeechService;
