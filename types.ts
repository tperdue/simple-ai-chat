export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    id: string;
    createdAt: string;
  }
  
  export interface DB {
    messages: ChatMessage[];
  }
  