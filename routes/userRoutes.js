const express = require("express");
const userRoutes = express.Router();

userRoutes.get("/login", (req, res) => {
  res.send("Home funcionando");
});

module.exports = userRoutes;
