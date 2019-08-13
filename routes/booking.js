var bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const Booking = require('../models/booking')

const bookingRouter = module.exports =  require("express").Router();

bookingRouter.get('/api/booking/:id', jsonParser, (req, res)=>{
    console.log(req.body)
    Booking.find({ userId: req.params.id })
      .then(dbBooking => {
            console.log(dbBooking)
            res.json(dbBooking)
        })
      .catch(err => res.json([]));
  }
)
bookingRouter.post('/api/booking', jsonParser, (req, res)=>{
  console.log(req.body)
  Booking.create(req.body)
    .then(dbBooking => {
          console.log(dbBooking)
          res.json(dbBooking)
      })
    .catch(err => res.json(err));
}
)
bookingRouter.get('/api/booking-all', jsonParser, (req, res)=>{
  console.log(req.body)
  Booking.find({})
    .then(dbBooking => {
          console.log(dbBooking)
          res.json(dbBooking)
      })
    .catch(err => res.status(422).json(err));
}
)