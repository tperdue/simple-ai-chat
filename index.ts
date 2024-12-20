import { chat } from './chat.js';
import * as readline from 'readline/promises';

// Create interface for reading from console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  console.log("Welcome to Simple Chat! Type 'exit' to quit.");
  
  while (true) {
    // Get user input
    const userInput = await rl.question('\nYou: ');
    
    // Check for exit command
    if (userInput.toLowerCase() === 'exit') {
      break;
    }
    
    try {
      // Get and display AI response
      const response = await chat(userInput);
      console.log('\nAssistant:', response);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
      } else {
        console.error('Error:', error);
      }
    }
  }
  
  rl.close();
}


// Start the chat
main().catch(console.error);