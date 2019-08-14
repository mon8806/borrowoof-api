//requiring modules
const express = require("express");
const formData = require('express-form-data')
const passport = require('passport');
const mongoose = require("mongoose");
const cors = require('cors')
var bodyParser = require('body-parser')

require('dotenv').config()

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/unit18Populater",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);


const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(formData.parse())
// pass the authorization checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
//app.use('/api/booking', authCheckMiddleware);
// app.use('/api/signup', authCheckMiddleware);
//app.use('/api/login', authCheckMiddleware);


//Loads up route
app.use(require('./routes/user'));
app.use(require('./routes/dog'));
app.use(require('./routes/image'))
app.use(require('./routes/booking'))



// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
