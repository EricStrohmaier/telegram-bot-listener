import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';

dotenv.config();

const botToken = process.env.BOT_TOKEN;
const botChatID = "@keepmeupdatednostr"

if (!botToken) {
  throw new Error('BOT_TOKEN is not defined in the environment variables');
}
const bot = new TelegramBot(botToken, { polling: true });
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text || '';
  
    console.log(`Received message from chat ID: ${chatId}`);
    
    // Handle messages based on the chat ID
    if (chatId === -1001919685787) {
      // Respond to messages in chat 1
      bot.sendMessage(botChatID, `Received in Chat HOMIES: ${messageText}`);
    } else if (chatId === 5058142202) {
      // Respond to messages in chat 2
      bot.sendMessage(botChatID, `Received in Chat 2: ${messageText}`);
    } else {
      // Respond to messages in other chats or private messages
      bot.sendMessage(botChatID, `Received in Other Chat: ${messageText}`);
    }
  });

 
  

console.log('Bot is running...');
