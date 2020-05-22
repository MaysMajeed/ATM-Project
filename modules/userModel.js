const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  active: Boolean,
  creationDate: { type: Date, default: Date.now },
});

const userCollection = mongoose.model("userCollection", userSchema);

module.exports = userCollection;
