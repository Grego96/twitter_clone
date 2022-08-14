const User = require("../models/User");
const bcrypt = require("bcryptjs");
const formidable = require("formidable");
const path = require("path");
/////////

const userControllers = {
  login: (req, res) => {
    res.render("login");
  },

  create: (req, res) => {
    res.render("register");
  },

  store: async (req, res) => {
    const form = formidable({
      multiples: true,
      uploadDir: path.join(__dirname, "../public/img"),
      keepExtensions: true,
    });
    form.parse(req, async (error, fields, files) => {
      const newUser = new User({
        firstname: fields.firstname,
        lastname: fields.lastname,
        email: fields.email,
        username: fields.username,
        password: await bcrypt.hash(fields.password, 8),
        profileImage: files.profileImage.newFilename,
      });
      newUser.save((error) => {
        if (error) return console.log(error);
        console.log("Se creó un nuevo usuario en la DB!");
      });
      res.redirect("/");
      
    });
  },
};

module.exports = userControllers;
