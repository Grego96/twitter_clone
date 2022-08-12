const express = require("express");
const bcrypt = require("bcryptjs");
const userRoutes = express.Router();
const User = require("../models/User");

userRoutes.get("/login", (req, res) => {
  res.send("Home funcionando");
});

userRoutes.get("/register", (req, res) => {
  res.render("register");
});

userRoutes.post("/register", async (req, res) => {
  console.log(req.body);
  const newUser = await new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.user,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 8),
    profileImage: req.body.profileImage,
  });
  // newUser.save((error) => {
  //   if (error) return console.log(error);
  //   console.log("Se creó un nuevo usuario en la DB!");
  // });

  res.send("Se creó un usuario nuevo");
  // res.redirect("/");
});

module.exports = userRoutes;
