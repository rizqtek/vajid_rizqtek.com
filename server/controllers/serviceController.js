const Service = require('../models/Service');

// Get all services
const getServices = async (req, res) => {
  try {
    const services = await Service.find({ isActive: true })
      .sort({ order: 1, createdAt: -1 });

    res.json({ services });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all services (admin - including inactive)
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find()
      .sort({ order: 1, createdAt: -1 });

    res.json({ services });
  } catch (error) {
    console.error('Get all services error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create service
const createService = async (req, res) => {
  try {
    const { title, description, features, icon, order } = req.body;

    if (!title || !description) {
      return res.status(400).json({ 
        message: 'Title and description are required' 
      });
    }

    const service = new Service({
      title,
      description,
      features: features || [],
      icon,
      order: order || 0
    });

    await service.save();

    res.status(201).json({ 
      message: 'Service created successfully',
      service 
    });

  } catch (error) {
    console.error('Create service error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update service
const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const service = await Service.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.json({ 
      message: 'Service updated successfully',
      service 
    });

  } catch (error) {
    console.error('Update service error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete service
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.json({ message: 'Service deleted successfully' });

  } catch (error) {
    console.error('Delete service error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Toggle service status
const toggleServiceStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    service.isActive = !service.isActive;
    await service.save();

    res.json({ 
      message: `Service ${service.isActive ? 'activated' : 'deactivated'} successfully`,
      service 
    });

  } catch (error) {
    console.error('Toggle service status error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getServices,
  getAllServices,
  createService,
  updateService,
  deleteService,
  toggleServiceStatus
};