const Tweet = require("../models/Tweet");
const mongoose = require("mongoose");
const User = require("../models/User");
require("../config/mongoConfig");

async function traerUsuarios() {
  const user = await User.find( );
  console.log(user);
}
traerUsuarios();

//create your array. i inserted only 1 object here
// const tweets = [];
// for (let i = 0; i < 20; i++) {
//   const tweet = new Tweet({
//     text: "lorem ipsum",
//     user:
//   });
//   tweets.push(tweet);
// }
// //connect mongoose
// //save your data. this is an async operation
// //after you make sure you seeded all the products, disconnect automatically
// tweets.map(async (tweet, index) => {
//   await tweet.save((err, result) => {
//     if (index === tweets.length - 1) {
//       console.log("DONE!");
//       mongoose.disconnect();
//     }
//   });
// });
