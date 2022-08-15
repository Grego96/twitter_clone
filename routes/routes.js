const express = require("express");
const routes = express.Router();
const User = require("../models/User");
const Tweet = require("../models/Tweet");
const isAuthenticated = require("../middlewares/isAuthenticated");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");

// userRoutes.
routes.get("/login", userController.login);
routes.post("/login", authController.login);

routes.get("/register", userController.create);
routes.post("/register", userController.store);

routes.post("/user/:id", isAuthenticated,  userController.following)

// tweetsRoutes
routes.get("/", isAuthenticated, tweetController.index);
routes.post("/", isAuthenticated, tweetController.store);
routes.get("/profile/:id", isAuthenticated, tweetController.profiles);
routes.delete("/delete/:id", isAuthenticated, tweetController.destroy);

routes.post("/like", isAuthenticated, async (req, res) => {
  // console.log(req.body.like);
  //   const newLike = await new Tweet({
  //     like: req.body.like,
  //   });
  res.redirect("/");
});

module.exports = routes;
