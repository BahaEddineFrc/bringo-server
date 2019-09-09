const mongoose = require('mongoose');
let User = require('../models/category');

const restauSchema = mongoose.Schema({
    name:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    address:{
      type: String,
      required: true
    },
    phone:{
        type: String,
        required: true
    },
    pic:{
        type: String
    },
    menu:{
      type: Array,
      items:{
        type: Array,
        content:{ //category
          id: String,
          categName: String,
          deliveryTime: String
        }
      }
    }
    

  });

  const Restaurant = module.exports = mongoose.model('Restaurant', restauSchema);
