const User = require("../models/User");
const bcrypt = require("bcryptjs");

const userControllers = {
  login: (req, res) => {
    res.render("login");
  },

  create: (req, res) => {
    res.render("register");
  },

  store: async (req, res) => {
    console.log(req.body);
    const newUser = await new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.user,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 8),
      profileImage: req.body.profileImage,
    });
    newUser.save((error) => {
      if (error) return console.log(error);
      console.log("Se creó un nuevo usuario en la DB!");
    });

    res.redirect("/");
  },
};

module.exports = userControllers;
