const { getAllBuddies, createBuddy, getBuddyById, updateBuddy, deleteBuddy } = require('../controllers/Buddy_controllers');
const express = require('express');
const router = express.Router();    


router.get('/', getAllBuddies);
router.post('/', createBuddy);
router.get('/:id', getBuddyById);
router.put('/:id', updateBuddy);
router.delete('/:id', deleteBuddy);

module.exports = router;
