const jwt = require("jsonwebtoken");
require("dotenv").config();

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzFhMTJkMjczNDI2ODBjZmM0YzFjZCIsImlhdCI6MTU4OTc0ODAxM30.cgZ0X5XeXW3TVWxE2fVdJ_6qCxT6Af1i2sW2tBK8O_Q";

try {
  const decoded = jwt.verify(token, process.env.JWT_KEY);
  console.log({ decoded });
} catch (err) {
  console.log(err.message);
}
