const fetch = require('node-fetch');
const { TELEGRAM_API_TOKEN, CHAT_ID, NIFTY_SYMBOL, THRESHOLD_PE } = require('../config');
const { sendTelegramMessage } = require('./telegramService');

async function getNiftyPERatio() {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${NIFTY_SYMBOL}?region=US&lang=en-US&includePrePost=false&interval=2m&range=1d`;
    const response = await fetch(url);
    const data = await response.json();
    const peRatio = data.chart.result[0].meta.trailingPE;
    return peRatio;
}

async function checkPERatioAndNotify() {
    try {
        const currentPERatio = await getNiftyPERatio();
        console.log(`Current NIFTY PE ratio: ${currentPERatio}`);
        if (currentPERatio < THRESHOLD_PE) {
            const message = `The NIFTY PE ratio has fallen below your threshold. Current PE ratio: ${currentPERatio}`;
            await sendTelegramMessage(message);
        }
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
}

module.exports = {
    checkPERatioAndNotify
};
