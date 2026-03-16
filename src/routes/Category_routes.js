const CategoryRoutes = require('express').Router();
const CategoryController = require('../controllers/Category_controllers');



CategoryRoutes.get('/', CategoryController.getAllCategories);
CategoryRoutes.post('/', CategoryController.createCategory);
CategoryRoutes.delete('/:id', CategoryController.deleteCategory);

module.exports = CategoryRoutes;