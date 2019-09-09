const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
    name:{
      type: String
    },
    description:{
      type: String
    },
    sizes:{    
        type: Array,
        items: {
            size:String,
            price:String
        }
    },
    pic:{
      type: String
    }
  });

  const Dish = module.exports = mongoose.model('Dish', dishSchema);
