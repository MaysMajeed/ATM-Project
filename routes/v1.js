const validate = require("validate.js");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

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

router.get("/api/singleAtm/:id", async (req, res) => {
  const singleAtm = await AtmCollection2.findById(req.params.id);
  if (!singleAtm)
    return res.status(404).send("The ATM with the specific ID is not found!!");
  res.send(singleAtm);
});

router.get("/", async (req, res) => {
  const allAtms = await AtmCollection2.find();
  res.send(allAtms);
});

router.post("/api/Newatm", async (req, res) => {
  const constraints = {
    name: {
      presence: true,
      length: {
        minimum: 3,
        message: "must be at least 6 characters",
      },
      format: {
        pattern: "[a-z0-9]+",
        flags: "i",
        message: "can only contain a-z and 0-9",
      },
    },
    country: {
      presence: true,
      inclusion: {
        within: { Iraq: "IQ", Egypt: "EG", Emirates: "AE" },
        message: "^We're not providing services to %{value}",
      },
    },
    haveCash: {
      presence: true,
      type: "boolean",
    },
    working: {
      presence: true,
      type: "boolean",
    },
    city: {
      presence: true,
      type: "string",
    },
    address: {
      presence: true,
      type: "string",
    },
    loc: {
      presence: true,
    },
    "loc.coordinates": {
      presence: true,
      type: "array",
    },
    "loc.type": {
      presence: true,
      type: "string",
    },
  };

  const check = validate(req.body, constraints);

  console.log(check);

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
});

router.put("/updateAtm/:id", async (req, res) => {
  const atm = await AtmCollection2.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      haveCash: req.body.haveCash,
      working: req.body.working,
      country: req.body.country,
      city: req.body.city,
      address: req.body.address,
    },
    { new: true }
  );

  if (!atm)
    return res.status(404).send("The ATM with the specific ID is not found!");
  res.send(atm);
});

router.delete("/deleteAtm/:id", async (req, res) => {
  const atm = await AtmCollection2.findByIdAndRemove(req.params.id);
  if (!atm)
    return res.status(404).send("The ATM with the specific ID is not found!");
  res.send(atm);
});

module.exports = router;
