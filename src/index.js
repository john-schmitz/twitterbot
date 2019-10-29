require('dotenv-safe').config();
const clinet = require("./twitter");
const app = require('./app');
const fetch = require("node-fetch");
let CronJob = require('cron').CronJob;

let fetch_and_tweet = async () => {
    let res = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
    let json = await res.json();

    await clinet.tweet(json.text);
    response.json({message: json.text});
};

new CronJob('0 15 * * *', function() {
    fetch_and_tweet();
  }, null, true, 'America/Sao_Paulo');

app.listen(process.env.PORT || 5500);

app.get('/', (req,res) => {
    res.json({message: "Hello!"});
})