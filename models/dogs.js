//requiring mongoose module
const mongoose = require("mongoose");
//creates schema for db collections
const Schema = mongoose.Schema;
//creating a callection
const dogSchema = new Schema({
  onwerId: { type: String, required: true},
  name: { type: String, required: true },
  gender: { type: String, required: true },
  breed: { type: String, required: true },
  activityLevel: { type: String, required: true },
  goodWith: { type: String, required: true },
  availability: { type: String, required: true },
  aboutMe: { type: String, required: true},
  image: { type: String, required: true}
});

//tells mongoose to use to scheme for book collection
const dogs = mongoose.model("Dogs", dogSchema);

//exporting book component
module.exports = dogs;