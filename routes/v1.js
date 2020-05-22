const express = require("express");
const router = express.Router();
const atmController = require("../controllers/atm.controller");
const userController = require("../controllers/user.controller");

//ATM routes

router.get("/", atmController.getAll);

router.get("/api/singleAtm/:id", atmController.singleGet);

router.post("/api/Newatm", atmController.addNew);

router.put("/updateAtm/:id", atmController.updatee);

router.delete("/deleteAtm/:id", atmController.deletee);

//user routes

router.post("/registration", userController.registering);
router.post("/login", userController.logining);

module.exports = router;
