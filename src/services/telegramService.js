const TelegramBot = require('node-telegram-bot-api');
const { TELEGRAM_API_TOKEN, CHAT_ID } = require('../config');

const bot = new TelegramBot(TELEGRAM_API_TOKEN, { polling: true });

async function sendTelegramMessage(message) {
    try {
        await bot.sendMessage(CHAT_ID, message);
    } catch (error) {
        console.error(`Failed to send message: ${error}`);
    }
}

module.exports = {
    sendTelegramMessage
};
