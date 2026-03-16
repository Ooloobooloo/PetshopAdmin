const express = require('express');
const router = express.Router();
const { listBuddiesAdmin, createBuddyForm, storeBuddy, editBuddyForm, updateBuddyAdmin, deleteBuddyAdmin } = require('../controllers/Buddy_controllers');

router.get('/list', listBuddiesAdmin);
router.get('/create', createBuddyForm);
router.post('/store', storeBuddy);
router.get('/edit/:id', editBuddyForm);
router.post('/update/:id', updateBuddyAdmin);
router.post('/delete/:id', deleteBuddyAdmin);

module.exports = router;