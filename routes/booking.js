var bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const Booking = require('../models/booking')

const bookingRouter = module.exports =  require("express").Router();

bookingRouter.post('/api/booking', jsonParser, (req, res)=>{
    console.log(req.body)
    Booking.find(req.query)
      .then(dbBooking => {
            console.log(dbBooking)
            res.json(dbBooking)
        })
      .catch(err => res.status(422).json(err));
  }
)