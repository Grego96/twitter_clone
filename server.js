require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const User = require("./models/users");

mongoose.connect(process.env.DB_CONNECTION_STRING);
mongoose.connection
  .once("open", () => console.log("¡Conexión con la base de datos establecida!"))
  .on("error", (error) => console.log(error));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

routes(app);

const user = new User({
  firstname: "Alina",
  lastname: "Gabriels",
  username: "Alina Gabriels",
});
user.save();

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
