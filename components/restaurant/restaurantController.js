const express = require('express');
const router = express.Router();

// Models
let Restaurant = require('./restaurant');
let User = require('../user/user');
let Category = require('./category');
let Dish = require('./dish');

//DONE
export async function getAllRestaurants(req, res) {
  try {
    Restaurant.find({}, function (err, restaurants) {
      return res.status(200).json(restaurants);
    });
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}

export async function getRestauById(req, res) {
  try {
    //    const delivery = await Restaurant.findOne({ _id: req.params.id })
    Restaurant.findById(req.params.id, function (err, restaurant) {
      return res.status(200).json(restaurant);
    });
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}

export async function getCategoryById(req, res) {
  try {
    Category.findById(req.params.id, function (err, category) {
      return res.status(200).json(category);
    });
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}
export async function getDishById(req, res) {
  try {
    const dish = await Dish.findOne({ _id: req.params.id })
    return res.status(200).json(dish);

  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}

export async function createRestau(req, res) {
  try {
      //req.checkBody('fullname','name is required').notEmpty();

      let restaurant = new Restaurant(); 
      restaurant.name = req.body.name;
      restaurant.email = req.body.email;
      restaurant.address = req.body.address;
      restaurant.phone = req.body.phone;
      restaurant.pic = req.body.pic;
      restaurant.menu = req.body.menu;

      restaurant = await Restaurant.create(restaurant)
      return res.status(200).json(restaurant);
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}

export async function deleteRestau(req, res) {
  try {
    
      let query = { _id: req.params.id }

      Restaurant.findById(req.params.id, function (err, restau) {
        if (err) {
          return res.status(500).end()
        } else {
          Restaurant.remove(query, function (err) {
            if (err) { console.log(err); return res.status(500).end() }
            return res.status(200).json('Success deleting reastau') 
          });
        }
      });
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}

module.exports = router;