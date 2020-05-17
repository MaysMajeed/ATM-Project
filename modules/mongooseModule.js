const mongoose = require("mongoose");

// model
const atmSchema = new mongoose.Schema({
  name: String,
  creationDate: { type: Date, default: Date.now },
  haveCash: Boolean,
  working: Boolean,
  country: String,
  city: String,
  address: String,
  loc: {
    typee: String,
    coordinates: [Number],
  },
});

const UserCollection = mongoose.model("UserCollection", atmSchema);

module.exports = UserCollection;
