const express = require("express");
const routes = express.Router();
const Tweet = require("../models/Tweet");
const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");
const User = require("../models/User");

// userRoutes.
routes.get("/login", userController.login);

routes.get("/register", userController.create);
routes.post("/register", userController.store);

// tweetsRoutes
routes.get("/", tweetController.index);
routes.post("/", tweetController.store);

routes.post("/like", async (req, res) => {
  console.log(req.body.like);
  //   const newLike = await new Tweet({
  //     like: req.body.like,
  //   });
  res.redirect("/");
});

routes.get("/profile/:id", async (req, res) => {
  const userTweets = await User.findById(req.params.id).populate("tweets");

  console.log(userTweets);
  //   const userTweets = await Tweet.find()
  //     .sort([["createdAt", "descending"]])
  //     .populate("user");
  res.render("profile", { userTweets });
});

module.exports = routes;
