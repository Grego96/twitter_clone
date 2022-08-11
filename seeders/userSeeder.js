// const User = require("../models/users");
// const mongoose = require("mongoose");
// //create your array. i inserted only 1 object here
// const newUser = [   
//   new User({
//     image:
//       "https://static.seattletimes.com/wp-content/uploads/2018/01/a8e801dc-f665-11e7-bf8f-ddd02ba4a187-780x1181.jpg",
//     title: "Origin",
//     author: "Dan Brown",
//     description:
//       "2017 mystery thriller novel. Dan Brown is back with another thriller so moronic you can feel your IQ points flaking away like dandruff",
//     price: 12
//   }),]
// //connect mongoose
// require("../config/mongoConfig")
// //save your data. this is an async operation
// //after you make sure you seeded all the products, disconnect automatically
// products.map(async (p, index) => {
//   await p.save((err, result) => {
//     if (index === products.length - 1) {
//       console.log("DONE!");
//       mongoose.disconnect();
//     }
//   });
// });