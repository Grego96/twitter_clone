const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/User");

passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        const user = await User.find()
  
        if (!user) {
          return done(null, false, { message: "Incorrect email or password." });
        }
        const compare = await bcrypt.compare(password, user.password);
  
        if (!compare) {
          return done(null, false, { message: "Incorrect email or password." });
        }
        return done(null, user);
      },
    ),
  );
  
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(async function (id, done) {
    const user = await User.findByPk(id, {
      include: Role
    })
      .then((user) => {
        done(null, user);
      })
      .catch((error) => {
        done(error, user);
      });
  });