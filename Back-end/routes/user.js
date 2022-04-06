const express = require('express');
const {
  registerUser,
  loginUser,
  logoutUser,
  getUsers,
} = require('../controllers/users');

const router = express.Router();

router.get('/users/all', getUsers);

router.post('/user/register', registerUser);

// Login Handle
router.post('/user/login', loginUser);

// Logout Handle
router.get('/user/logout', logoutUser);

module.exports = router;
