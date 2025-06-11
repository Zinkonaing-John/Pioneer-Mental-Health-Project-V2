export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatHistory {
  messages: ChatMessage[];
}

export interface ChatSettings {
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  topK?: number;
}
