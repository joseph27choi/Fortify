const mongoose = require("mongoose");
require("dotenv").config()

const DBConnect = () =>
  mongoose
    .connect(
      // file cannot access .env, so have to manually type it out
      process.env.MONGO_CONNECTION_URL
    )
    .then(() => console.log("MongoDB is conected"))
    .catch((err) => {
      console.log("MongoDB Error: " + err);
    });

module.exports = DBConnect;