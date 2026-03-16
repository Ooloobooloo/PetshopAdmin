const categoryServices = require('../services/Category_services');

const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryServices.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCategory = async (req, res) => {
    try {
        const categoryData = req.body;              
        const newCategory = await categoryServices.create(categoryData);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        await categoryServices.delete(categoryId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
};

const listCategoriesAdmin = async (req, res) => {
    try {
        const categories = await categoryServices.findAll();
        res.render('admin/category/CategoryIndex', { categories });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createCategoryForm = async (req, res) => {
    res.render('admin/category/CategoryCreate');
};

const storeCategory = async (req, res) => {
    try {
        const categoryData = req.body;
        await categoryServices.create(categoryData);
        res.redirect('/admin/category/list');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteCategoryAdmin = async (req, res) => {
    try {
        await categoryServices.delete(req.params.id);
        res.redirect('/admin/category/list');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory,
    listCategoriesAdmin,
    createCategoryForm,
    storeCategory,
    deleteCategoryAdmin
};