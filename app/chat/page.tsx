'use client'

import { useState } from 'react'
import { FaMoon, FaSun, FaUser, FaPaperPlane, FaRegSmile } from 'react-icons/fa'

type Message = {
  sender: 'user' | 'bot'
  text: string
}

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
          sender: 'bot',
          text: "Hi! It's great to meet you. How can I help you today?",
        },
      ])
      const [input, setInput] = useState('')
      const [darkMode, setDarkMode] = useState(false)
    
      const handleSend = () => {
        if (!input.trim()) return
    
        const userMessage: Message = { sender: 'user', text: input }
    
        const botReply: Message = {
          sender: 'bot',
          text: generateBotReply(input),
        }
    
        setMessages((prev) => [...prev, userMessage, botReply])
        setInput('')
      }
    
      const generateBotReply = (input: string) => {
        const lower = input.toLowerCase()
    
        if (lower.includes('sad') || lower.includes('tired')) {
          return "I'm sorry you're feeling that way. Would you like to talk about it?"
        }
    
        if (lower.includes('happy') || lower.includes('good')) {
          return "That's wonderful to hear! Keep up the positive vibes ✨"
        }
    
        if (lower.includes('stress') || lower.includes('exam')) {
          return "Exams can be tough. Remember to take breaks and breathe. You've got this!"
        }
    
        return "Thanks for sharing that. I'm here with you."
      }

      const handleQuickMessage = (text: string) => {
        setInput(text)
        handleSend()
      }

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen flex flex-col`}>
      {/* Header */}
      <header className={`flex justify-between items-center px-6 py-4 shadow ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <div className="text-xl font-bold">
          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Logo</span>{' '}
          <span className={darkMode ? 'text-white' : 'text-black'}>Mental AI</span>
        </div>
        <div className="flex gap-4 items-center text-xl">
          <button onClick={() => setDarkMode(!darkMode)} className="transition">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <FaUser />
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 p-6 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-end ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'bot' && <div className={`w-8 h-8 rounded-full mr-2 flex items-center justify-center text-black font-bold ${
      darkMode ? 'bg-white text-white' : 'bg-black text-black'
    }`}>🤖</div>}
            <div
              className={`px-4 py-2 rounded-3xl max-w-xs ${
                msg.sender === 'user'
                  ? darkMode
                    ? 'bg-neutral-800 text-white'
                    : 'bg-blue-200 text-black'
                  : darkMode
                    ? 'bg-neutral-700 text-white'
                    : 'bg-gray-300 text-black'
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === 'user' && <FaUser className="ml-2" />}
          </div>
        ))}
      </main>

      {/* Input */}
      <footer className={`p-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-300'}`}>
        <div className="flex items-center gap-2  mb-4">
          <FaRegSmile />
          <input
            type="text"
            placeholder="Share your thought..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className={`flex-1 p-3 rounded-full outline-none ${
                darkMode ? 'bg-neutral-900 border border-gray-700 text-white' : 'bg-white border border-gray-300 text-black'
              }`}
          />
          <button onClick={handleSend} className="text-xl">
            <FaPaperPlane />
          </button>
        </div>

        <div className="flex justify-center gap-2 flex-wrap text-sm font-semibold">
          <button
            onClick={() => handleQuickMessage('❤️ Need Support')}
            className={`rounded-full px-4 py-2 border ${
              darkMode
                ? 'bg-black border-red-600 text-red-600'
                : 'bg-white border-red-600 text-red-600'
            }`}
          >
            ❤️ Need Support
          </button>
          <button
            onClick={() => handleQuickMessage('😟 Feeling Overwhelmed')}
            className={`rounded-full px-4 py-2 ${
              darkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'
            }`}
          >
            😟 Feeling Overwhelmed
          </button>
          <button
            onClick={() => handleQuickMessage('⭐ Celebrate Progress')}
            className={`rounded-full px-4 py-2 border ${
              darkMode
                ? 'bg-black border-yellow-400 text-yellow-400'
                : 'bg-white border-yellow-400 text-yellow-500'
            }`}
          >
            ⭐ Celebrate Progress
          </button>
        </div>
      </footer>
    </div>
  )
}
