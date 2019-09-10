const mongoose = require('mongoose');

const deliverySchema = mongoose.Schema({

    userId: { type: String },
    restauId: { type: String },
    driverId: { type: String },
    createdAt: { type: Date },

    dishId: { type: String },
    dishName: { type: String },
    nbr: { type: String },
    size: { type: String },
    total: { type: String }

});


const Delivery = module.exports = mongoose.model('Delivery', deliverySchema);
