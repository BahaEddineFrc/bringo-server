const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
    name:{type: String},
    description:{type: String},
    sizes:[{
            size:{type:String},
            price:{type:String}
    }],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    pic:{type: String}
  });

  const Dish = module.exports = mongoose.model('dish', dishSchema);
