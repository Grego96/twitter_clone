const Tweet = require("../models/Tweet");
const User = require("../models/User");

const tweetControllers = {
  index: async (req, res) => {
    const tweets = await Tweet.find()
      .sort([["createdAt", "descending"]])
      .populate("user");
    res.render("home", { tweets, user: req.user });
  },

  store: async (req, res) => {
    const newTweet = await new Tweet({
      text: req.body.text,
      user: req.user,
    });

    const user = await User.findById(req.user.id);
    user.tweets.push(newTweet.id);

    newTweet.save((error) => {
      if (error) return console.log(error);
      console.log("Se creó un nuevo tweet en la DB");
    });
    user.save((error) => {
      if (error) return console.log(error);
      console.log("se actualizo los tweets");
    });
    res.redirect("/");
  },

  profiles: async (req, res) => {
    const userTweets = await User.findById(req.params.id)
      .populate("tweets")
      .sort([["createdAt", "descending"]]);
    res.render("profile", { userTweets });
  },

  destroy: async (req, res) => {
    await Tweet.findByIdAndRemove(req.params.id);
    // await User.updateOne({ _id: req.user.id }, { $pull: { tweets: req.params.id } });
    await User.findByIdAndUpdate(req.user.id, { $pull: { tweets: req.params.id } });
    res.redirect(`/profile/${req.user.id}`);
  },
};

module.exports = tweetControllers;
