const cron = require('node-cron');
const { CHECK_INTERVAL } = require('../config');

function scheduleCronJob(task) {
    cron.schedule(CHECK_INTERVAL, task);
    console.log('NIFTY PE ratio checker started...');
}

module.exports = {
    scheduleCronJob
};
