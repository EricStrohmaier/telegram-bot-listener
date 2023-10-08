import TelegramBot, { User } from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';

dotenv.config();

const botToken = process.env.BOT_TOKEN;
const botChatID = "@getachat"

if (!botToken) {
  throw new Error('BOT_TOKEN is not defined in the environment variables');
}
const bot = new TelegramBot(botToken, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text || '';
    
    console.log(`Received message from chat ID: ${chatId}`);
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

    if (msg.photo) {
      // Get the photo with the largest file size (last in the array)
      const largestPhoto = msg.photo[msg.photo.length - 1];
      
      // Retrieve the file ID of the largest photo
      const fileId = largestPhoto.file_id;
      
      // Use the bot API to get the file information
      const fileResponse = await bot.getFile(fileId);
      
      // Extract the file path from the response
      const filePath = fileResponse.file_path;
      
      // Construct the full-size image URL
      const imageUrl = `https://api.telegram.org/file/bot${botToken}/${filePath}`;
      
      // Send the image URL as a message to the user
      bot.sendMessage(botChatID, `Here is the image URL:\n${imageUrl}`);
      
      console.log('Image URL sent to the user');
      console.log(imageUrl);
    }
  });
  

console.log('Bot is running...');
