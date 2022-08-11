const User = require("../models/User");
const mongoose = require("mongoose");

//create your array. i inserted only 1 object here
const newUsers = [];
for (let i = 0; i < 20; i++) {
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
//connect mongoose
require("../config/mongoConfig");
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
newUsers.map(async (user, index) => {
  await user.save((err, result) => {
    if (index === newUsers.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});
