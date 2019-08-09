//requiring mongoose module
const mongoose = require("mongoose");
//creates schema for db collections
const Schema = mongoose.Schema;
//creating a callection
const dogSchema = new Schema({
  ownerId: { type: String, required: true},
  name: { type: String, required: true },
  gender: { type: String, required: true },
  breed: { type: String, required: true },
  activityLevel: { type: String, required: true },
  goodWithPeople:  {type: String },
  goodWithKids: { type: String},
  goodWithOtherDogs: { type: String},
  availableMonday : {type: String},
  availableTuesday : { type: String},
  availableWednesday : { type: String},
  availableThursday : { type: String},
  availableFriday : { type: String},
  availableSaturday : { type: String},
  availableSunday : { type: String},
  aboutMe: { type: String},
  image: { type: String}
});

//tells mongoose to use to scheme for book collection
const dogs = mongoose.model("Dogs", dogSchema);

//exporting book component
module.exports = dogs;