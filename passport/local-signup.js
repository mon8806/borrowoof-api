const User = require('../models/user');
const PassportLocalStrategy = require('passport-local').Strategy;   
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim(),
    zipcode: req.body.zipcode.trim(),
    aboutMe: req.body.aboutMe.trim(),
    image: req.body.image.trim()
  };

  const newUser = new User(userData);
  newUser.save((err, user) => {
    if (err) { return done(err); }

    const payload = {
        sub: user._id
    }
    
    const token = jwt.sign(payload, JWT_SECRET);
    const  data = {
        name: user.name,
        email: user.email,
        zipcode: user.zipcode,
        aboutMe: user.aboutMe,
        image: user.image,
        _id: user._id,
        token: token
      }
    return done(null,data);
  });
});