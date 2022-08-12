const _ = require("lodash");
const Tweet = require("../models/Tweet");
const { faker } = require("@faker-js/faker");
require("../config/mongoConfig");

module.exports = async () => {
  
  const tweets = [];
  for (let i = 0; i < process.env.SEEDER_TOTAL_TWEETS; i++) {
    const tweet = new Tweet({
      text: "lorem ipsum",
    });
    tweets.push(tweet);
  }

  for (let i = 0; i < tweets.length; i++) {
    tweets[i].save();
  }
  console.log("TWEETS DONE!");
 
  return tweets
};
