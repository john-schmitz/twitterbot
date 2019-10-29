let twitter = require('twitter');

let client = new twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
});

client.tweet = async function (tweet) {
    try {
        await client.post('statuses/update', { status: tweet });
    } catch (error) {
        console.error("deu pau", error)
    }
}

module.exports = client;