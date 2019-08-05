
//requiring express module
const router = require("express").Router();
//requiring googlecontroller module from controller folder
const dogController = require("../../controllers/dogProfile");


router.route("/dog")
.get(dogController.findAll)
.post(dogController.create);

router
.route("/dog/:id")
.get(dogController.findById)
.put(dogController.update)
.delete(dogController.remove);


module.exports = router;
