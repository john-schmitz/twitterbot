const Resolver = require("./services/resolver");
const tweetCron = require("./cron/tweetCron");
const fetchRandomPhrase = require("./services/sources/randomPhrase");
const tweet = require("./services/channels/tweet");
const twitterBot = new Resolver(fetchRandomPhrase, tweet, tweetCron);

module.exports = twitterBot;