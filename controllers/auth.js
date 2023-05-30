const { User } = require("../models/user");

const { HttpError, cntrlWrapper } = require("../helpers");

const register = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

module.exports = {
  register: cntrlWrapper(register),
};
