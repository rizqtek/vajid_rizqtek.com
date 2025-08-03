const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  subscribe,
  getSubscribers,
  exportSubscribers,
  unsubscribe
} = require('../controllers/newsletterController');

// Public routes
router.post('/subscribe', subscribe);
router.post('/unsubscribe', unsubscribe);

// Protected routes (admin only)
router.get('/subscribers', auth, getSubscribers);
router.get('/export', auth, exportSubscribers);

module.exports = router;