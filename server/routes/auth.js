const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  login,
  getProfile,
  createAdmin
} = require('../controllers/authController');

// Public routes
router.post('/login', login);
router.post('/create-admin', createAdmin); // Remove this in production

// Protected routes
router.get('/profile', auth, getProfile);

module.exports = router;