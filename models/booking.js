//requiring mongoose module
const mongoose = require("mongoose");
//creates schema for db collections
const Schema = mongoose.Schema;
//creating a collection
const bookingSchema = new Schema({
  petId: { type: String, required: true },
  ownerId: { type: String, required: true},
  userId: { type: String, required: true },
  image: { type: String, required: true},
  name: { type: String, required: true },
});

//tells mongoose to use to scheme for book collection
const booking = mongoose.model("Booking", bookingSchema);

//exporting book component
module.exports = booking;