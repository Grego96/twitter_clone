const _ = require("lodash");
const Tweet = require("../models/Tweet");
const User = require("../models/User");
require("../config/mongoConfig");
const users = require("./userSeeder")();
const tweets = require("./tweetSeeder")();

console.log(users, tweets);

async function getRandomUser() {
  const number = _.random(0, process.env.SEEDER_TOTAL_USERS - 1);
  return await User.findOne().skip(number);
}

module.exports = async () => {



}