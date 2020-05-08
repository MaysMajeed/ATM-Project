const express = require("express");
const app = express();
const Joi = require("joi");
const hello = require("./middlewares/hello");
const router = require("./routes/v1");
const mongoose = require("mongoose");

app.use(express.json());

app.use(hello);

mongoose
  .connect("mongodb://Mays:maysmlab1@ds363118.mlab.com:63118/atm-db")
  .then(() => console.log("connected to the database ^_^"))
  .catch((err) => console.error("Connection Faild!"));

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to ${port}...`));
