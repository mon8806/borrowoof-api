//requiring modules
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.json({
    "result": 200,
    "message":  "API is Running!"
  })
);

//exporting router component
module.exports = router;
