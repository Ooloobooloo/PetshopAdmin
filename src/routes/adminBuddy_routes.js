const express = require('express');
const router = express.Router();
const { listBuddiesAdmin, createBuddyForm, storeBuddy, editBuddyForm, updateBuddy, deleteBuddy } = require('../controllers/Buddy_controllers');

router.get('/list', listBuddiesAdmin);
router.get('/create', createBuddyForm);
router.post('/store', storeBuddy);
router.get('/edit/:id', editBuddyForm);
router.post('/update/:id', updateBuddy);
router.post('/delete/:id', deleteBuddy);

module.exports = router;