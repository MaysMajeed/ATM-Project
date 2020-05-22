const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.header(x - auth - token);
  if (!token) {
    return res.send(401).send("No token, not authorize to access");
  } else {
    try {
      const payload = jwt.verify(token, process.env.JWTSecret);
      req.findUser = payload;
      next();
    } catch (err) {
      res.status(400).send("Invalid token!");
    }
  }
};
