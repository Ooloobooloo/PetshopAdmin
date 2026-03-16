const category= require('../models/Category');

exports.findAll = async () => {
  return await category.find();
};
exports.create = async (categoryData) => {
    const category1 = new category(categoryData);
    return await category1.save();
};
exports.delete = async (id) => {
    return await category.findByIdAndDelete(id);
}; 

