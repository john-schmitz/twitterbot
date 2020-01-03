const config = require("../../config");
const fetch = require("node-fetch");

module.exports = async function () {
  let res = await fetch(config.USELESSFACTS_URL);
  let json = await res.json();
  return json.text;
}