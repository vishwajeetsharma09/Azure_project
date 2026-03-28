const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB connected"));

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(5000, () => console.log("Server running on port 5000"));
