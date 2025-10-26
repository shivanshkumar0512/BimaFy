import React, { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";

// -------------------- Types --------------------
interface MessageType {
  id: number;
  text: string;
  sender: "bot" | "user";
  suggestions?: string[];
  isGoalPrompt?: boolean;
}

// -------------------- BimaFy Logo --------------------
const BimaFyLogo: React.FC = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#3498db", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#2ecc71", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z"
      fill="url(#logo-gradient)"
    />
    <path
      d="m173.44 148.8-31.11-31.11a12 12 0 0 0-17.51 0L82.56 160a12 12 0 0 1-17-17l42.26-42.27a12 12 0 0 1 17 0l42.26 42.27a12 12 0 0 1-17 17l-13.63-13.62Z"
      fill="url(#logo-gradient)"
    />
    <path
      d="M110.33 135.89a12 12 0 0 1-17 0l-10.77-10.77a12 12 0 1 1 17-17l10.77 10.77a12 12 0 0 1 0 17Z"
      fill="white"
    />
  </svg>
);

// -------------------- App Component --------------------
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const initialBotMessage: MessageType = {
    id: 1,
    text: "Hello! I'm the BimaFy AI Assistant. How can I help you with your wealth and insurance questions today?",
    sender: "bot",
    suggestions: ["What is an SIP?", "Explain term insurance", "How do mutual funds work?"],
  };

  // Show greeting when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([initialBotMessage]);
    }
  }, [isOpen]);

  // Auto-scroll
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // -------------------- Gemini API --------------------
  const callGeminiAPI = async (
    userMessage: string,
    messageHistory: MessageType[],
    isGoalPlanning = false
  ): Promise<void> => {
    setIsLoading(true);
    const apiKey = "AIzaSyC_KYD1bfabMvhza8EDahzJ3IS1WgFv6tI"; // <-- add your Gemini API key
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    let systemPrompt: string;
    if (isGoalPlanning) {
      systemPrompt = `You are BimaFy Wealth Assistant. A user wants to plan for a financial goal. Their goal is: "${userMessage}". 
      Provide encouragement, 3-4 steps, suggest 2-3 general investment avenues, and end with a disclaimer.`;
    } else {
      systemPrompt = `You are BimaFy Wealth Assistant, an expert in insurance, wealth management, and financial planning. 
      Be clear, concise, supportive, but do not provide direct financial advice.`;
    }

    const contents = messageHistory.slice(0, -1).map((msg) => ({
      role: msg.sender === "bot" ? "model" : "user",
      parts: [{ text: msg.text }],
    }));
    contents.push({ role: "user", parts: [{ text: userMessage }] });

    const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: systemPrompt }],
      },
      ...contents,
    ],
  };

    let retries = 3;
    let delay = 1000;

    while (retries > 0) {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        const candidate = result.candidates?.[0];

        if (candidate && candidate.content?.parts?.[0]?.text) {
          const botResponse = candidate.content.parts[0].text as string;
          setMessages((prev) => [...prev, { id: Date.now(), text: botResponse, sender: "bot" }]);
          setIsLoading(false);
          return;
        } else {
          throw new Error("Invalid response structure from API");
        }
      } catch (error) {
        console.error("API call failed:", error);
        retries--;
        if (retries > 0) {
          await new Promise((res) => setTimeout(res, delay));
          delay *= 2;
        } else {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
              sender: "bot",
            },
          ]);
          setIsLoading(false);
        }
      }
    }
  };

  // -------------------- Message Processing --------------------
  const processMessage = (text: string): void => {
    const newUserMessage: MessageType = { id: Date.now(), text, sender: "user" };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setInputValue("");

    const isGoalPlanning =
      messages.length > 0 && messages[messages.length - 1].isGoalPrompt === true;

    callGeminiAPI(text, updatedMessages, isGoalPlanning);
  };

  const handleSendMessage = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const trimmedInput = inputValue.trim();
    if (trimmedInput === "") return;
    processMessage(trimmedInput);
  };

  const handleSuggestionClick = (suggestion: string): void => {
    processMessage(suggestion);
  };

  const handleGoalPlannerClick = (): void => {
    const goalPromptMessage: MessageType = {
      id: Date.now(),
      text: "✨ That's a great idea! Please describe your financial goal. For example: 'I want to buy a car worth ₹10 lakhs in 3 years' or 'I want to build a retirement fund of ₹2 crore'.",
      sender: "bot",
      isGoalPrompt: true,
    };
    setMessages([...messages, goalPromptMessage]);
  };

  // -------------------- UI Components --------------------
  const Message: React.FC<{ message: MessageType }> = ({ message }) => {
    const isBot = message.sender === "bot";
    return (
      <div className={`flex items-end gap-2 ${isBot ? "justify-start" : "justify-end"}`}>
        {isBot && (
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
            <BimaFyLogo />
          </div>
        )}
        <div
          className={`px-4 py-3 rounded-2xl max-w-xs md:max-w-md break-words prose prose-sm ${
            isBot
              ? "bg-gray-100 text-gray-800 rounded-bl-none"
              : "bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-br-none"
          }`}
        >
          {message.text.split("\n").map((line, i) => (
            <p key={i} className="mb-2 last:mb-0">
              {line}
            </p>
          ))}
          {message.suggestions && (
            <div className="mt-3 flex flex-wrap gap-2">
              {message.suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const TypingIndicator: React.FC = () => (
    <div className="flex items-end gap-2 justify-start">
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
        <BimaFyLogo />
      </div>
      <div className="px-4 py-3 rounded-2xl bg-gray-100 rounded-bl-none">
        <div className="flex items-center justify-center space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );

  // -------------------- Render --------------------
  return (
    <div className="font-sans antialiased">
      {/* Chat Bubble */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
          aria-label="Toggle Chat"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-5 z-40 w-[calc(100%-40px)] sm:w-96 h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 text-white rounded-t-2xl flex items-center gap-3 shadow-md">
          <div className="w-10 h-10">
            <BimaFyLogo />
          </div>
          <div>
            <h3 className="font-bold text-lg">BimaFy Assistant</h3>
            <p className="text-sm opacity-90">Online</p>
          </div>
        </div>

        {/* Messages */}
        <div ref={chatContainerRef} className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
          {messages.map((msg) => (
            <Message key={msg.id} message={msg} />
          ))}
          {isLoading && <TypingIndicator />}
        </div>

        {/* Input Form */}
        <div className="p-4 border-t bg-white rounded-b-2xl">
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={handleGoalPlannerClick}
              className="flex-1 px-3 py-2 text-sm text-center font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              ✨ Plan a Financial Goal
            </button>
          </div>
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="off"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-blue-600 disabled:bg-blue-300 transition-colors"
              disabled={isLoading || inputValue.trim() === ""}
              aria-label="Send Message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}