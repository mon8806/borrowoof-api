//requiring express module
const router = require("express").Router();

const bookingController = require("../../controllers/bookings");


router.route("/booking")
.get(bookingController.findAll)
.post(bookingController.create);

router
.route("/booking/:id")
.get(bookingController.findById)
.put(bookingController.update)
.delete(bookingController.remove);


module.exports = router;
