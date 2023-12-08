const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    maxLength: 30,
    trim: true,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    maxLength: 50,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);


// every model is going to be in this file, therefore need to package as {{}, {}, ...}
module.exports = { User };
