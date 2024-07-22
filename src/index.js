require('dotenv').config();
const { scheduleCronJob } = require('./utils/cronJob');
const { checkPERatioAndNotify } = require('./services/niftyService');

scheduleCronJob(checkPERatioAndNotify);
