const mongoose = require("mongoose");

// model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  active: Boolean,
  creationDate: { type: Date, default: Date.now },
});

const AtmCollection2 = mongoose.model("AtmCollection2", userSchema);

module.exports = AtmCollection2;
