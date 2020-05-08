const express = require("express");
const router = express.Router();
const atmController = require("../controllers/atm.controller.js");

console.log(atmController);
// const mongoose = require("mongoose");

// const atmSchema = new mongoose.Schema({
//   name: String,
//   creationDate: { type: Date, default: Date.now },
//   haveCash: Boolean,
//   working: Boolean,
//   country: String,
//   city: String,
//   address: String,
//   loc: {
//     typee: String,
//     coordinates: [Number],
//   },
// });

// const AtmCollection2 = mongoose.model("AtmCollection2", atmSchema);

// Get All ATMs
router.get("/", atmController.getAll);
// Get One ATM
router.get("/api/singleAtm/:id", atmController.singleGet);
// Add New ATM
router.post("/api/Newatm", atmController.addNew);

// router.put("/updateAtm/:id", async (req, res) => {
//   const atm = await AtmCollection2.findByIdAndUpdate(
//     req.params.id,
//     {
//       name: req.body.name,
//       haveCash: req.body.haveCash,
//       working: req.body.working,
//       country: req.body.country,
//       city: req.body.city,
//       address: req.body.address,
//     },
//     { new: true }
//   );

//   if (!atm)
//     return res.status(404).send("The ATM with the specific ID is not found!");
//   res.send(atm);
// });

// router.delete("/deleteAtm/:id", async (req, res) => {
//   const atm = await AtmCollection2.findByIdAndRemove(req.params.id);
//   if (!atm)
//     return res.status(404).send("The ATM with the specific ID is not found!");
//   res.send(atm);
// });

module.exports = router;
