require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();
// const User = require("./models/User")

require("./config/mongoConfig"); // mongoose connect <-----

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

routes(app);

// const newUser = new User({
//   firstname: "Grego",
//   lastname: "Hunkeler",
//   username: "Linternita",
//   email: "gregoryhunkeler@gmail.com"
// })
// newUser.save()

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
