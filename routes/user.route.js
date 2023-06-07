const express = require("express")
const router = express.Router()
// import controller 
const userController = require("../controllers/user.controller")
const verifyToken = require("../middlewares/verifyToken")


// signup route --------------------
router.route("/create-user")
.post(userController.createAuser)

// login router---------------------
router.route("/log-in")
.post(userController.loginAuser)

// manage users----------------------
router.route("/manage-profile/:id")
.get(userController.getAuser)
.patch(userController.manageAuser)

// user persistance ------------------
router.get("/me", verifyToken, userController.getMe);

module.exports = router;