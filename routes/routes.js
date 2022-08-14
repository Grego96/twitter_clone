const express = require("express");
const routes = express.Router();
const Tweet = require("../models/Tweet");
const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");
const authController = require("../controllers/authController");
const isAuthenticated = require("../middlewares/isAuthenticated")
const User = require("../models/User");

// userRoutes.
routes.get("/login", userController.login);
routes.post("/login", authController.login)

routes.get("/register", userController.create);
routes.post("/register", userController.store);

// tweetsRoutes
routes.get("/", isAuthenticated, tweetController.index);
routes.post("/", isAuthenticated, tweetController.store);


routes.post("/like", isAuthenticated,  async (req, res) => {
  // console.log(req.body.like);
  //   const newLike = await new Tweet({
  //     like: req.body.like,
  //   });
  res.redirect("/");
});

routes.get("/profile/:id", isAuthenticated , async (req, res) => {
  const userTweets = await User.findById(req.params.id)
    .populate("tweets")
    .sort([["createdAt", "descending"]]);

  // console.log(userTweets);
  //   const userTweets = await Tweet.find()
  //     .sort([["createdAt", "descending"]])
  //     .populate("user");
  res.render("profile", { userTweets });
});

module.exports = routes;
