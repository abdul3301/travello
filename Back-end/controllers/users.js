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
  // Create a new user using passport-local-mongoose
  const { name, email, phone, password, cpassword } = req.body;

  // Check for email validation
  if (!validator.validate(email)) {
    return res.status(400).send({
      status: 'fail',
      message: 'Invalid email address',
    });
  }

  // Check for password validation
  if (password.length < 6) {
    return res.status(400).send({
      status: 'fail',
      message: 'Password must be at least 6 characters long',
    });
  }

  // Check for password match
  if (password !== cpassword) {
    return res.status(400).send({
      status: 'fail',
      message: 'Passwords do not match',
    });
  }

  // Check if name is empty
  if (name.length < 1) {
    return res.status(400).send({
      status: 'fail',
      message: 'Name cannot be empty',
    });
  }

  // Check if phone is empty
  if (phone.length < 1) {
    return res.status(400).send({
      status: 'fail',
      message: 'Phone number cannot be empty',
    });
  }

  // Check if phone is a number
  if (Number.isNaN(phone)) {
    return res.status(400).send({
      status: 'fail',
      message: 'Phone number must be a number',
    });
  }

  // Check if the user already exists
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).send({
      status: 'fail',
      message: 'User already exists',
    });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user
  const newUser = new User({
    name,
    email,
    phone,
    password: hashedPassword,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).send({
      status: 'success',
      data: {
        user: savedUser,
      },
    });
  } catch (err) {
    res.status(400).send({
      status: 'fail',
      message: err,
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
