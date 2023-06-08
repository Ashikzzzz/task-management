const express = require("express")
const router = express.Router()
const taskController= require("../controllers/task.controller")

// create a task route --------------------------
router.route("/create-task")
.post(taskController.createAtask)

//get all task-------------------------
router.route("/get-all-task")
.get(taskController.getAllTask)

// update a task router -------------------------
router.route("/get-task/:id")
.get(taskController.getATask)

// update a task router -------------------------
router.route("/update-task/:id")
.patch(taskController.updateAtask)


// delete a task router -------------------------------
router.route("/delete-task/:id")
.delete(taskController.deleteAtask)


// get task user from another user  and filtering by assigned user----------------------
router.route("/get-a-task/email")
.get(taskController.getTaskUserToUser)

// filtering by due_date----------------------------------------------
router.route("/get-a-task/status")
.get(taskController.getTaskByStatus)

module.exports = router;