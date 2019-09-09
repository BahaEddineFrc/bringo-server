const mongoose = require('mongoose');

const deliverySchema = mongoose.Schema({
    id:{  //auto?
      type: String
    },
    userId:{
        type: String
    },
    restauId:{
      type: String
    },
    driverId:{
        type: String
    },
    time:{
        type: String
    },
    userId:{
        type: String
    },
    dish:{    
        type: Object,
        contents: {
            id:String,
            name:String,
            nbr:String,
            size:String,
            price:String
        }
    }
  });


  const Delivery = module.exports = mongoose.model('Delivery', deliverySchema);
