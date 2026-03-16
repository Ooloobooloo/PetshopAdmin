const Buddyrouter = require('../controllers/Buddy_controller');
const express = require('express');
const router = express.Router();    


router.get('/', Buddyrouter.getAllBuddies);
router.post('/', Buddyrouter.createBuddy);
router.get('/:id', Buddyrouter.getBuddyById);
router.put('/:id', Buddyrouter.updateBuddy);
router.delete('/:id', Buddyrouter.deleteBuddy);

module.exports = Buddyrouter;
