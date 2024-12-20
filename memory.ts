import { JSONFilePreset } from 'lowdb/node';
import type { ChatMessage, DB } from './types.js';

// Initialize the database with default data
const defaultData: DB = { messages: [] };

export async function getDb() {
  // Create or load the database
  return await JSONFilePreset<DB>('db.json', defaultData);
}

export async function addMessage(message: Omit<ChatMessage, 'id' | 'createdAt'>) {
  const db = await getDb();
  
  // Add metadata to the message
  const messageWithMetadata: ChatMessage = {
    ...message,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  
  // Add to database and save
  db.data.messages.push(messageWithMetadata);
  await db.write();
  
  return messageWithMetadata;
}

export async function getMessages() {
  const db = await getDb();
  return db.data.messages;
}