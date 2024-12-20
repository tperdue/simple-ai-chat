# Simple AI Chat with Memory

A lightweight, TypeScript-based chat application that interacts with OpenAI's GPT models and maintains conversation history using a JSON database. This project demonstrates implementation of:
- Modern TypeScript practices
- AI integration with OpenAI's GPT models
- Persistent data storage
- Clean architecture principles
- Asynchronous programming patterns

## Features

- 🤖 OpenAI GPT integration for intelligent responses
- 💾 Persistent chat history using JSON file storage
- 📝 TypeScript for type safety and better developer experience
- 🚀 Clean, maintainable codebase
- 🔄 Asynchronous message handling
- 📦 Minimal dependencies

## Technical Overview

### Project Structure

```
simple-chat/
├── .env                 # Environment variables
├── package.json        # Project configuration and dependencies
├── tsconfig.json      # TypeScript configuration
├── types.ts           # Type definitions
├── memory.ts          # Database operations
├── chat.ts            # Chat logic and OpenAI integration
└── index.ts           # Main application entry point
```

### Key Components

#### Memory Management
The application uses LowDB for JSON-based storage, featuring:
- Persistent message history
- Message metadata (IDs, timestamps)
- Asynchronous database operations
- Type-safe data handling

#### Chat System
Built with OpenAI's GPT models, implementing:
- Customizable system prompts
- Full conversation context
- Robust error handling
- TypeScript type safety

#### Database Structure
Messages are stored in a structured JSON format:
```json
{
  "messages": [
    {
      "role": "user",
      "content": "Hello!",
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "createdAt": "2024-03-20T10:00:00.000Z"
    }
  ]
}
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/simple-chat.git
cd simple-chat
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenAI API key:
```bash
OPENAI_API_KEY=your_api_key_here
```

### Usage

Start the chat application:
```bash
npm start
```

## License

This project is licensed under the MIT License. Feel free to fork and modify for your own use.

## Professional Contact

I'm open to exciting opportunities and collaborations in software development, particularly in:
- Backend Development
- AI/ML Integration
- TypeScript/Node.js Projects
- System Architecture

### Let's Connect
- 📧 Email: timaperduejr@gmail.com
- 💼 LinkedIn: [Tim Perdue](https://www.linkedin.com/in/tperdue/)


If you're interested in discussing potential opportunities or would like to learn more about my work, feel free to reach out through any of the channels above.