// REQUIREMENTS
const express = require("express");
const mongoose = require("mongoose");

// PORT SETUP
const PORT = process.env.PORT || 3000;

// DB REQUIREMENTS
// const db = require("./models");

// APP SETUP
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// CONNECT TO DATABASE
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// ROUTES
app.use(require("./routes/api.js"));

// SERVER SETUP
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});