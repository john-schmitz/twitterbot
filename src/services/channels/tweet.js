const twitter = require('twitter');
const config = require('../../config');

let client = new twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

module.exports = async function (status) {
  try {
    await client.post('statuses/update', {
      status
    });
  } catch (error) {
    console.error("deu pau bem pesado", error)
  }
}