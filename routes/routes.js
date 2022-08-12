const express = require("express");
const routes = express.Router();
const userController = require("../controllers/userController");
const Tweet = require("../models/Tweet");

// userRou.tes.
routes.get("/login", userController.login);

routes.get("/register", userController.create);
routes.post("/register", userController.store);

// tweetsRoutes
routes.get("/", async (req, res) => {
  const tweets = await Tweet.find()
    .sort([["createdAt", "descending"]])
    .populate("user");

  res.render("home", { tweets });
});

module.exports = routes;
