const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/user.route")

// middleware
app.use(express.json());
app.use(cors());

// using routes
app.use("/api/users",userRoute)


// ---------- Happy Server ----------
app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
})

module.exports = app;