const Tweet = require("../models/Tweet");
const mongoose = require("mongoose");
const User = require("../models/User");
require("../config/mongoConfig");

async function traerUsuariosRandom() {
  const user = await User.find();
  const number = Math.floor(Math.random() * user.length);
  console.log(user[number]);
}
//traerUsuarios();
