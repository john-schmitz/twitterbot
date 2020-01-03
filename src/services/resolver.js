module.exports = class Resolver {
  constructor(source, channel, cron) {
    this.source = source;
    this.channel = channel;
    this.cron = cron;
  }
  
  startCron() {
    this.cron(async () => {
      this.channel(await this.source());
    });
  }
}