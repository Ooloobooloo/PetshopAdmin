const express = require('express');
const router = express.Router();
const { listCategoriesAdmin, createCategoryForm, storeCategory, deleteCategoryAdmin } = require('../controllers/Category_controllers');

router.get('/list', listCategoriesAdmin);
router.get('/create', createCategoryForm);
router.post('/store', storeCategory);
router.post('/delete/:id', deleteCategoryAdmin);

module.exports = router;