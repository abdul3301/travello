// User Controller

const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const validator = require('email-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// Fetch all users from database

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send();
  }
};

const registerUser = async (req, res) => {
  const { username, email, phone, password } = req.body;
  // console.log(req.body);

  // Email Validation
  if (!validator.validate(email)) {
    return res.status(400).send({ error: 'Invalid Email' });
  }

  // Password Validation
  if (password.length < 6) {
    return res
      .status(400)
      .send({ error: 'Password must be at least 6 characters' });
  }

  // Phone Validation
  if (phone.length < 10) {
    return res.status(400).send({ error: 'Invalid Phone Number' });
  }

  // Check if the user exists
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).send({ error: 'User already exists' });
  }

  // Save the user
  const newUser = new User({
    username,
    email,
    phone,
    password,
  });

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(password, salt);

  // Save the user
  try {
    const savedUser = await newUser.save();
    res.status(201).send({
      status: 'success',
      data: {
        user: savedUser,
      },
    });
  } catch (error) {
    res.status(400).send({
      status: 'fail',
      message: error,
    });
  }
};

const loginUser = async (req, res) => {
  // Check if the user exists
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send({
      status: 'fail',
      message: 'User does not exist',
    });
  }

  // Check if the password is correct
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send({
      status: 'fail',
      message: 'Incorrect password',
    });
  }

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  // Save the token in cookie
  res.cookie('token', token, {
    expires: new Date(Date.now() + 3600000),
    httpOnly: true,
  });

  res.header('auth-token', token).send({
    status: 'success',
    data: {
      user,
      token,
    },
  });
};

const logoutUser = async (req, res) => {
  // Logout User
  res.clearCookie('token');
  res.status(200).send({
    status: 'success',
    message: 'User logged out',
  });
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  logoutUser,
};
