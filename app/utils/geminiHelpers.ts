import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatHistory, ChatSettings } from "../../types";

// ✅ No self-import here

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export async function chattogemini(
  userMessage: string,
  history: ChatHistory,
  settings: ChatSettings
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: history.messages.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.content }],
      })),
      generationConfig: {
        temperature: settings.temperature ?? 0.7,
        maxOutputTokens: settings.maxTokens ?? 2048,
        topP: settings.topP ?? 0.8,
        topK: settings.topK ?? 40,
      },
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error in chattogemini:", error);
    throw new Error("Failed to get response from Gemini");
  }
}
