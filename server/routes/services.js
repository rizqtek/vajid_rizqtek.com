const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getServices,
  getAllServices,
  createService,
  updateService,
  deleteService,
  toggleServiceStatus
} = require('../controllers/serviceController');

// Public routes
router.get('/', getServices);

// Protected routes (admin only)
router.get('/all', auth, getAllServices);
router.post('/', auth, createService);
router.put('/:id', auth, updateService);
router.delete('/:id', auth, deleteService);
router.patch('/:id/toggle', auth, toggleServiceStatus);

module.exports = router;