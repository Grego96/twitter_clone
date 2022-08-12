const _ = require("lodash");
require("../config/mongoConfig");

// async function getRandomUser() {
//   const number = _.random(0, process.env.SEEDER_TOTAL_USERS - 1);
//   return await User.findOne().skip(number);
// }

module.exports = async () => {
  const users = await require("./userSeeder")();
  const tweets = await require("./tweetSeeder")();

  for (let i = 0; i < users.length; i++) {
    let allUsers = [...users];
    allUsers.slice(i, 1);
    let chosenUsers = _.sampleSize(allUsers, _.random(0, 5));

    for (let j = 0; j < chosenUsers.length; j++) {
      users[i].followers.push(chosenUsers[j].id);
      chosenUsers[j].following.push(users[i].id);
    }
  }

  console.log("FALLOWINGS AND FALLOWERS DONE!");

  for (let i = 0; i < tweets.length; i++) {
    let allUsers = [...users];
    let chosenUser = _.sample(allUsers);
    tweets[i].user = chosenUser;
    chosenUser.tweets.push(tweets[i])
  }

  console.log("TWEETS OF USERS DONE!");

  for (let i = 0; i < users.length; i++) {
    users[i].save();
  }
  console.log("USERS SAVE DONE!");
  for (let i = 0; i < tweets.length; i++) {
    tweets[i].save();
  }
  console.log("TWEETS SAVE DONE!");
};
