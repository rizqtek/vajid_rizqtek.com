const Newsletter = require('../models/Newsletter');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');

// Subscribe to newsletter
const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });
    
    if (existingSubscriber) {
      if (existingSubscriber.status === 'unsubscribed') {
        // Reactivate subscription
        existingSubscriber.status = 'active';
        existingSubscriber.subscribedAt = new Date();
        await existingSubscriber.save();
        
        return res.json({ 
          message: 'Welcome back! Your subscription has been reactivated.' 
        });
      } else {
        return res.status(400).json({ 
          message: 'Email is already subscribed to our newsletter' 
        });
      }
    }

    // Create new subscription
    const subscriber = new Newsletter({ email });
    await subscriber.save();

    res.status(201).json({ 
      message: 'Successfully subscribed to newsletter!',
      subscriber: {
        id: subscriber._id,
        email: subscriber.email,
        subscribedAt: subscriber.subscribedAt
      }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all subscribers (admin only)
const getSubscribers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const subscribers = await Newsletter.find({ status: 'active' })
      .sort({ subscribedAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Newsletter.countDocuments({ status: 'active' });

    res.json({
      subscribers,
      pagination: {
        current: page,
        pages: Math.ceil(total / limit),
        total
      }
    });
  } catch (error) {
    console.error('Get subscribers error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Export subscribers as CSV
const exportSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find({ status: 'active' })
      .sort({ subscribedAt: -1 });

    const csvWriter = createCsvWriter({
      path: path.join(__dirname, '../exports/subscribers.csv'),
      header: [
        { id: 'email', title: 'Email' },
        { id: 'subscribedAt', title: 'Subscribed At' },
        { id: 'status', title: 'Status' }
      ]
    });

    const records = subscribers.map(sub => ({
      email: sub.email,
      subscribedAt: sub.subscribedAt.toISOString(),
      status: sub.status
    }));

    await csvWriter.writeRecords(records);

    res.download(path.join(__dirname, '../exports/subscribers.csv'), 'newsletter-subscribers.csv');

  } catch (error) {
    console.error('Export subscribers error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Unsubscribe
const unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const subscriber = await Newsletter.findOneAndUpdate(
      { email },
      { status: 'unsubscribed' },
      { new: true }
    );

    if (!subscriber) {
      return res.status(404).json({ message: 'Email not found in our records' });
    }

    res.json({ message: 'Successfully unsubscribed from newsletter' });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  subscribe,
  getSubscribers,
  exportSubscribers,
  unsubscribe
};