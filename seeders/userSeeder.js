const _ = require("lodash");
// const Tweet = require("../models/Tweet");
const User = require("../models/User");
require("../config/mongoConfig");

// async function getRandomUser() {
//   const number = _.random(0, process.env.SEEDER_TOTAL_USERS - 1);
//   return await User.findOne().skip(number);
// }

module.exports = async () => {
  const newUsers = [];
  for (let i = 0; i < process.env.SEEDER_TOTAL_USERS; i++) {
    const user = new User({
      firstname: "Alina",
      lastname: "Gabriels",
      username: "AGabriels",
      email: "alinagabriels@cucusu.com",
      description: "hola me llamo Alina y estoy feliz",
      profileImage: "imagen de perfil",
      tweets: [],
    });
    newUsers.push(user);
  }

  for (let i = 0; i < newUsers.length; i++) {
    newUsers[i].save();
  }
  console.log("USERS DONE!");
};
