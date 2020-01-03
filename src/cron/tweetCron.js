module.exports = function(callback) {
  let CronJob = require('cron').CronJob;
  // 0 15 * * * is equal to everyday at 15:00
  new CronJob('0 15 * * *', callback, null, true, 'America/Sao_Paulo');
};