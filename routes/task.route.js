const express = require("express")
const router = express.Router()
const taskController= require("../controllers/task.controller")

router.route("/create-task")
.post(taskController.createAtask)


router.route("/:id")
.delete()
.patch()

module.exports = router;