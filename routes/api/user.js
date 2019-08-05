//requiring express module
const router = require("express").Router();
//requiring bookcontroller module from controllers folder
const userController = require("../../controllers/userProfile");

// Matches with "/api/books"
router.route("/user")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/user/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

  //exporting router component
module.exports = router;
