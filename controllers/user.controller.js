const validation = require("../utility/validation");
const validate = require("validate.js");
const userModel = require("../modules/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 *
 */
module.exports.register = async (req, res) => {
  // validate.js
  const check = validate(req.body, validation.register());
  // check validate -> error
  if (check) {
    return res.status(400).send(check);

    // check if the email exist -> error TODO:

    // hash the password
  } else {
    let plainPassword = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(plainPassword, salt);

    //create object // add to db
    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      active: true,
    });
    newUser.save();

    // check creation --> error TODO:

    // Create the Token FIXME:
    const token = jwt.sign({ id: newUser._id }, "shhhh");

    console.log({ token });

    // return the result
    return res.send({ token, newUser });
  }
};
