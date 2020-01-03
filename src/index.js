require('dotenv-safe').config();
const clinet = require("./twitter");
const app = require('./app');
const fetch = require("node-fetch");
const { startCron } = require("./cron/tweetCron");

let fetch_and_tweet = async () => {
    let res = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
    let json = await res.json();

    await clinet.tweet(json.text);
    response.json({message: json.text});
};

startCron(fetch_and_tweet);

app.listen(process.env.PORT || 5500);

app.get('/', (req,res) => {
    res.json({message: "Hello!"});
})