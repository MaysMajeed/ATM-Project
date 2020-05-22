const bcrypt = require("bcrypt");
const validate = require("validate.js");
const validation = require("../utility/validation");
const userModel = require("../modules/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.registering = async (req, res) => {
  const checkRegister = await validate(
    req.body,
    validation.registerValidation()
  );
  const findUser = await userModel.findOne({ email: req.body.email });

  if (checkRegister) {
    return res.status(400).send(checkRegister);
  } else if (findUser) {
    return res
      .status(400)
      .send("Email already exist, please try another email or login instead!");
  } else {
    let password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      ative: true,
    });
    user.save();
    return res.send(user);
  }
};

module.exports.logining = async (req, res) => {
  const checkLogining = await validate(
    req.body,
    validation.loginingValidation()
  );
  let findUser = await userModel.findOne({ email: req.body.email });
  const checkPassword = await bcrypt.compare(
    req.body.password,
    findUser.password
  );

  if (checkLogining) {
    return res.status(400).send(checkLogining);
  } else if (!findUser) {
    return res.status(400).send("Invalid username or password!");
  } else if (!checkPassword) {
    return res.status(400).send("Invalid username or password!");
  } else {
    const token = jwt.sign({ userID: findUser._id }, process.env.JWTSecret);
    res.send("you are authorized to login with the below token: " + token);
  }
};
