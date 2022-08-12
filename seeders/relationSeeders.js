const _ = require("lodash");
const User = require("../models/User");
const Tweet = require("../models/Tweet");
require("../config/mongoConfig");

module.exports = async () => {
  const users = await require("./userSeeder")();
  const tweets = await require("./tweetSeeder")();

  for (const user of users) {
    let chosenUsers = _.sampleSize(users, _.random(0, 5)).filter((u) => u.id !== user.id);

    for (const chosenUser of chosenUsers) {
      user.followers.push(chosenUser.id);
      chosenUser.following.push(user.id);
    }
  }

  for (const tweet of tweets) {
    let chosenUser = _.sample(users);
    tweet.user = chosenUser;
    chosenUser.tweets.push(tweet);
  }

  User.insertMany(users);
  Tweet.insertMany(tweets);

  console.log("TODO DONE!");
};
