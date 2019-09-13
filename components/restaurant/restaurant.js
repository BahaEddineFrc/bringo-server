import mongoose, { Schema } from 'mongoose'
const Category = require('./category');

const restauSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  pic: {
    type: String
  },
  menu: [
    {
      sectionTitle: { type: String } ,//breakfast, lunch, dinner, dessert
      sectionCategories: [{
        type: Schema.Types.ObjectId, ref: 'Category'
      }] 
    }
  ]

});

const Restaurant = module.exports = mongoose.model('restaurant', restauSchema);


/* 
sectionCategories: [{
        type: String //category:{ type: Schema.Types.ObjectId, ref: 'category' } //pizza, spaghetti, sandwich
      }]
      */