//requiring mongoose module
const mongoose = require("mongoose");
//creates schema for db collections
const Schema = mongoose.Schema;
//creating a collection
const bookingSchema = new Schema({
  bookingId: { type: String, required: true },
  petId: { type: String, required: true },
  userId: { type: String, required: true },
  date: { type: Number, required: true }
});

//tells mongoose to use to scheme for book collection
const booking = mongoose.model("Booking", bookingSchema);

//exporting book component
module.exports = booking;