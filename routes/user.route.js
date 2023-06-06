const express = require("express")
const router = express.Router()
// import controller 
const userController = require("../controllers/user.controller")


// signup route 
router.route("/create-user")
.post(userController.createAuser)

module.exports = router;