const mongoose = require('mongoose');
const category = require('./Category');

const BuddySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Đực', 'Cái'], required: true },
  breed: { type: String, required: true },
  image: { type: String },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Buddy', BuddySchema);