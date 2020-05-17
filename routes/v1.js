const express = require("express");
const router = express.Router();
const atmController = require("../controllers/atm.controller");
const userController = require("../controllers/user.controller");

// ATM Controller
router.get("/", atmController.getAll);
router.get("/api/singleAtm/:id", atmController.singleGet);
router.post("/api/Newatm", atmController.addNew);
router.put("/updateAtm/:id", atmController.updatee);
router.delete("/deleteAtm/:id", atmController.deletee);

// USER Controller
router.post("/register", userController.register);

module.exports = router;
