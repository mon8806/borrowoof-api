//requiring modules
const express = require("express");
const router = require("express").Router();
const formData = require('express-form-data')

require('dotenv').config()


var cors = require('cors')

const app = express();

const mongoose = require("mongoose");
//const routes = require("./routes");
const PORT = process.env.PORT || 3001;


// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(formData.parse())



//Loads up route
app.use(require('./routes/user'));
app.use(require('./routes/dog'));
app.use(require('./routes/image'))

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/unit18Populater",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
