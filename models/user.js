//requiring mongoose module
const mongoose = require("mongoose");
//creates schema for db collections
const Schema = mongoose.Schema;
//creating a collection
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  zipcode: { type: Number, required: true },
  image: { type: String}
});

//tells mongoose to use to scheme for book collection
const user = mongoose.model("User", userSchema);

//exporting book component
module.exports = user;
