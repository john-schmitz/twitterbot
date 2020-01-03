const config = require("./config");
const app = require('./app');
const twitterBot = require("./twitterBot");

app.listen(config.PORT, () => {
  twitterBot.startCron();
  console.log(`running on port ${config.PORT}`);
});

app.get('/', async (req, res) => {
  res.json({
    message: "Hello!"
  });
})