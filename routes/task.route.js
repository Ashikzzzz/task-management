const express = require("express")
const router = express.Router()
const taskController= require("../controllers/task.controller")

router.route("/create-task")
.post(taskController.createAtask)
// get(taskController)


router.route("/update-task/:id")
.delete()
.patch(taskController.updateAtask)

module.exports = router;