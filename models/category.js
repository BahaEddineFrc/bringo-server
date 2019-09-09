const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name:{
      type: String
    },
    averagePrice:{
      type: String
    },
    waitTime:{
        type: String
    },
    pic:{
      type: String
    }
  });

  const Category = module.exports = mongoose.model('Category', categorySchema);
