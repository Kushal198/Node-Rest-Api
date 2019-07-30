const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  price: { type: Number }
});

module.exports = mongoose.model('Product', productSchema);
