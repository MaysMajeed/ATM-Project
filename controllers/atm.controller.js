const mongoose = require("mongoose");
const validation = require("../utility/validate.tools");
const validate = require("validate.js");

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

const AtmCollection2 = mongoose.model("AtmCollection2", atmSchema);

/**
 *
 */
module.exports.singleGet = async (req, res) => {
  const singleAtm = await AtmCollection2.findById(req.params.id);
  if (!singleAtm)
    return res.status(404).send("The ATM with the specific ID is not found!!");
  res.send(singleAtm);
};

/**
 *
 */
module.exports.getAll = async (req, res) => {
  const allAtms = await AtmCollection2.find();
  res.send(allAtms);
};

/**
 *
 */
module.exports.addNew = async (req, res) => {
  const check = validate(req.body, validation.addNew());

  if (check) {
    return res.status(400).send(check);
  } else {
    const allAtms = new AtmCollection2({
      name: req.body.name,
      haveCash: req.body.haveCash,
      working: req.body.working,
      country: req.body.country,
      city: req.body.city,
      address: req.body.address,
      loc: {
        typee: req.body.loc.type,
        coordinates: req.body.loc.coordinates,
      },
    });
    allAtms.save();
    return res.send(allAtms);
  }
};
