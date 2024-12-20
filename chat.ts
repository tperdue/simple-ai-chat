import OpenAI from 'openai';
import { addMessage, getMessages } from './memory.js';
import 'dotenv/config';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  // System prompt to guide the AI's behavior
  const systemPrompt = `You are a helpful and friendly chat assistant. 
  Keep your responses concise but informative.
  If you don't know something, say so clearly.
  Always maintain a professional and helpful tone.`;
  
  export async function chat(userInput: string) {
    // Save user message
    await addMessage({
      role: 'user',
      content: userInput
    });
  
    // Get chat history
    const history = await getMessages();
  
    // Get AI response
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: 'system', content: systemPrompt },
        ...history
      ],
      temperature: 0.7,
    });
  
    const aiResponse = completion.choices[0].message;
  
    // Save AI response
    await addMessage({
      role: 'assistant',
      content: aiResponse.content || ''
    });
  
    return aiResponse.content;
  }
  