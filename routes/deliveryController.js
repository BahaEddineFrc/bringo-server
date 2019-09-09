const express = require('express');
const router = express.Router();

// Models
let Restaurant = require('../models/restaurant');
let User = require('../models/user');
let Delivery = require('../models/delivery');



  // POST Delivery checkOutDish
  router.post('/restaurant/:rest_id/category/:cat_id/dish/:dish_id/delivery', function(req, res){ 
    
    let delivery = new Delivery(); 
    delivery.dish.contents.name = req.body.dish.contents.name;

    Delivery.save(function(err){
        if(err){
          console.log(err); return;
        } else {
          console.log("delivery saved");
          res.status(200).send() //send its id too
        }
      });
  });

  // GET Delivery ById
  router.post('/delivery/:id', function(req, res){ 
        Delivery.findById(req.params.id, function(err, delivery){
          res.send(delivery);
        });
  });
