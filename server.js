// REQUIREMENTS
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// PORT SETUP
const PORT = process.env.PORT || 3000;

// APP SETUP
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// CONNECT TO DATABASE
mongoose.connect(
  process.env.MONGODB_URL || 'mongodb://localhost/andrewisfit',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// ROUTES
const routes = require("./routes");
app.use(routes);

// SERVER SETUP
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});