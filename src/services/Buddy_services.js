const Buddy = require('../models/Buddy');

exports.findAll = async () => {
  return await Buddy.find();
};

exports.create = async (buddyData) => {
    const buddy = new Buddy(buddyData);
    return await buddy.save();
};

exports.findById = async (id) => {
    return await Buddy.findById(id);
}

exports.update = async (id, buddyData) => {
    return await Buddy.findByIdAndUpdate(id, buddyData, { new: true });
};

exports.delete = async (id) => {
    return await Buddy.findByIdAndDelete(id);
};      


