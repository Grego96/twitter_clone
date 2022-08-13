const Tweet = require("../models/Tweet");

const tweetControllers = {
  index: async (req, res) => {
    const tweets = await Tweet.find()
      .sort([["createdAt", "descending"]])
      .populate("user");

    res.render("home", { tweets });
  },

  store: async (req, res) => {
    const newTweet = await new Tweet({
      text: req.body.text,
      user: "62f6fc729864c505c907bf5f",
    });
    newTweet.save((error) => {
      if (error) return console.log(error);
      console.log("Se creó un nuevo tweet en la DB");
    });
    res.redirect("/");
  },
};

module.exports = tweetControllers;
