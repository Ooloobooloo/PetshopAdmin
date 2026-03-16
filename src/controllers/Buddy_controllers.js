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

const listBuddiesAdmin = async (req, res) => {
    try {
        const buddies = await BuddyServices.findAll();
        res.render('admin/buddy/BuddyIndex', { buddies });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createBuddyForm = async (req, res) => {
    try {
        // Assuming we need categories for dropdown
        const CategoryServices = require('../services/Category_services');
        const categories = await CategoryServices.findAll();
        res.render('admin/buddy/BuddyCreate', { categories });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const storeBuddy = async (req, res) => {
    try {
        const buddyData = req.body;
        await BuddyServices.create(buddyData);
        res.redirect('/admin/buddy/list');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const editBuddyForm = async (req, res) => {
    try {
        const buddy = await BuddyServices.findById(req.params.id).populate('category');
        const CategoryServices = require('../services/Category_services');
        const categories = await CategoryServices.findAll();
        res.render('admin/buddy/BuddyEdit', { buddy, categories });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateBuddy = async (req, res) => {
    try {
        const buddyData = req.body;
        await BuddyServices.update(req.params.id, buddyData);
        res.redirect('/admin/buddy/list');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteBuddy = async (req, res) => {
    try {
        await BuddyServices.delete(req.params.id);
        res.redirect('/admin/buddy/list');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    getAllBuddies,
    createBuddy,
    listBuddiesAdmin,
    createBuddyForm,
    storeBuddy,
    editBuddyForm,
    updateBuddy,
    deleteBuddy
};
