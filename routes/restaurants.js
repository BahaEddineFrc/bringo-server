const express = require('express');
const router = express.Router();

// Models
let Restaurant = require('../models/restaurant');
let User = require('../models/user');

// Get All Restaurants
router.get('/restaurants', function(req, res){
  console.log("fetching restaurants");

    Restaurant.find({},function(err, restaurants){
    res.send(restaurants);
  });
});

// Get Single Restau
router.get('/restaurant/:id', function(req, res){
    Restaurant.findById(req.params.id, function(err, restaurant){
      res.send(restaurant);
    });
  });

  // POST Single Restau
router.post('/restaurant', function(req, res){
    //req.checkBody('fullname','name is required').notEmpty();
  
    // Get Errors
    let errors = req.validationErrors();
  //if(errors){ console.log(errors);
    

      let restaurant = new Restaurant(); //constr
      restaurant.name = req.body.fullname;
      restaurant.address = req.body.address;
  
      restaurant.save(function(err){
        if(err){
          console.log(err); return;
        } else {
          console.log("restau saved");
          res.status(200).send()
        }
      });
    
  });


// Delete Single Restau
router.delete('/:id', function(req, res){
    if(!req.user._id){
      //res.status(500).send();
    }
  
    let query = {_id:req.params.id}
  
    Restaurant.findById(req.params.id, function(err, restaurant){
      if(err){
        res.status(500).send();
      } else {
        Restaurant.remove(query, function(err){
          if(err){
            console.log(err);
          }
          res.send('Success');
        });
      }
    });
});

module.exports = router;
