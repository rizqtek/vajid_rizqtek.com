const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  submitContact,
  getContacts,
  updateContactStatus,
  deleteContact
} = require('../controllers/contactController');

// Public routes
router.post('/submit', submitContact);

// Protected routes (admin only)
router.get('/', auth, getContacts);
router.put('/:id/status', auth, updateContactStatus);
router.delete('/:id', auth, deleteContact);

module.exports = router;