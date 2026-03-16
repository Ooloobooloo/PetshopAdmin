const BuddyServices = require('../services/Buddy_services');

const getAllBuddies = async (req, res) => {
    try {
        const buddies = await BuddyServices.findAll();
        res.json(buddies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }              
};

const createBuddy = async (req, res) => {
    try {
        const buddyData = req.body;     
        const newBuddy = await BuddyServices.create(buddyData);
        res.status(201).json(newBuddy);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }       
};
