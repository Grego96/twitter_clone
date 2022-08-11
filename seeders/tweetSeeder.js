const _ = require("lodash");
const Tweet = require("../models/Tweet");
const User = require("../models/User");
require("../config/mongoConfig");

// async function getRandomUser() {
//   const number = _.random(0, process.env.SEEDER_TOTAL_USERS - 1);
//   return await User.findOne().skip(number);
// }

module.exports = async () => {
  
  const tweets = [];
  for (let i = 0; i < process.env.SEEDER_TOTAL_TWEETS; i++) {
    const tweet = new Tweet({
      text: "lorem ipsum",
      user: await getRandomUser(),
    });
    tweets.push(tweet);
  }

  for (let i = 0; i < tweets.length; i++) {
    tweets[i].save();
  }
  console.log("TWEETS DONE!");

};
