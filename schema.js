const mongoose = require('mongoose');

// Define schema for each collection
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: String,
  SKU: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
    required: true,
    validate: {
      validator: async function(value) {
        const count = await mongoose.model('ProductCategory').countDocuments({ _id: value });
        return count > 0;
      },
      message: 'Invalid category assigned to product.'
    }
  },
  inventory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductInventory'
  },
  price: {
    type: Number,
    min: 0
  },
  discount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discount'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date
});

const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  desc: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date
});

const productInventorySchema = new mongoose.Schema({
  quantity: {
    type: Number,
    min: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date
});

const discountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  desc: String,
  discount_percent: {
    type: Number,
    min: 0,
    max: 100
  },
  active: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date
});

// Create models for each schema
const Product = mongoose.model('Product', productSchema);
const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);
const Discount = mongoose.model('Discount', discountSchema);

module.exports = {
  Product,
  ProductCategory,
  ProductInventory,
  Discount
};
