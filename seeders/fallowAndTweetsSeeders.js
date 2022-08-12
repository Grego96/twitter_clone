const _ = require("lodash");
const Tweet = require("../models/Tweet");
const User = require("../models/User");
require("../config/mongoConfig");
const users = require("./userSeeder")();
const tweets = require("./tweetSeeder")();

// async function getRandomUser() {
//   const number = _.random(0, process.env.SEEDER_TOTAL_USERS - 1);
//   return await User.findOne().skip(number);
// }

module.exports = async () => {


  //   for (let i = 0; i < (await users).length; i++) {
  //     let allUsers = [... (await users)];
  //     allUsers.slice(i, 1);
  //     let chosenUsers = _.sampleSize(allUsers, _.random(0, 5));

  //     for (let j = 0; j < chosenUsers.length; j++) {
  //         (await users)[i].followers.push(chosenUsers[j].id);
  //       chosenUsers[j].following.push((await users)[i].id);
  //     }
  //   }

  //   for (let i = 0; i < (await users).length; i++) {
  //     (await users)[i].save();
  //   }
  //   console.log("USERS DONE!");
  //   for (let i = 0; i < (await tweets).length; i++) {
  //     (await tweets).save();
  //   }
  //   console.log("TWEETS DONE!");
};
