
//requiring modules
const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const dogRoutes = require("./dog");
const bookingRoutes = require("./booking");


router.use("/user", userRoutes);

router.use("/dog", dogRoutes);

router.use("/booking", bookingRoutes);


//module exports
module.exports = router;
