const express = require("express");
const routes = express.Router();
const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");

// userRou.tes.
routes.get("/login", userController.login);

routes.get("/register", userController.create);
routes.post("/register", userController.store);

// tweetsRoutes
routes.get("/", tweetController.index);
routes.post("/", tweetController.store);

module.exports = routes;
