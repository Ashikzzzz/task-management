const express = require("express");
const app = express();
const cors = require("cors");

// import necessery routes 
const taskRoute = require("./routes/task.route")
const userRoute = require("./routes/user.route")

// middleware
app.use(express.json());
app.use(cors());

// using user routes
app.use("/api/users",userRoute)
app.use("/api/users",userRoute)

// using task routes
app.use("/api/task",taskRoute)


// ---------- Happy Server ----------
app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
})

module.exports = app;