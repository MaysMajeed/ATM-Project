const express = require("express");
const app = express();
const hello = require("./middlewares/hello");
const routerV1 = require("./routes/v1");
const mongoose = require("mongoose");

app.use(express.json());

// Dummy middleware
app.use(hello);

mongoose
  .connect("mongodb://Mays:maysmlab1@ds363118.mlab.com:63118/atm-db")
  .then(() => console.log("connected to the database ^_^"))
  .catch((err) => console.error("Connection Faild!"));

// Version 1. of the API
app.use("/v1", routerV1);

// Giving 404 msg if the requested route was not handled by the routerV1
app.use("/", (req, res) => {
  return res.status(400).send({
    msg: "404 Not Found",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to ${port}...`));
