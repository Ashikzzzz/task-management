const express = require("express")
const router = express.Router()
const taskController= require("../controllers/task.controller")

// create a task route --------------------------
router.route("/create-task")
.post(taskController.createAtask)


// update a task router -------------------------
router.route("/update-task/:id")
.patch(taskController.updateAtask)


// delete a task router -------------------------------
router.route("/delete-task/:id")
.delete(taskController.deleteAtask)


// get task user from another user ----------------------
router.route("/get-task/email")
.get(taskController.getTaskUserToUser)

module.exports = router;