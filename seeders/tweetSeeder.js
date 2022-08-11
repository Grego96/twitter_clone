const _ = require("lodash");
const Tweet = require("../models/Tweet");
const mongoose = require("mongoose");
const User = require("../models/User");
require("../config/mongoConfig");


async function getRandomUser() {    
    const number = _.random(0, process.env.SEEDER_TOTAL_USERS-1);
    const user = await User.findOne().skip(number);   
    console.log(user)
    return user;



 //create your array. i inserted only 1 object here
  const tweets = [];
  for (let i = 0; i < process.env.SEEDER_TOTAL_TWEETS; i++) {
    const tweet = new Tweet({
      text: "lorem ipsum",
      user: await getRandomUser()
    });
    tweets.push(tweet);
  }

   tweets.map(async (tweet, index) => {
     await tweet.save((err, result) => {
       if (index === tweets.length - 1) {
         console.log("DONE!");        
       }
     });
   });
}

