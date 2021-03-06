const express = require('express');
const router = express.Router();

// Models
let Restaurant = require('./restaurant');
//let User = require('../user/user');
let Category = require('./category');
let Dish = require('./dish');

//DONE
export async function getAllRestaurants(req, res) {
  try {

    var restaurants = await Restaurant.find().populate("menu.sectionCategories.cat")
    return res.status(200).json(restaurants);
    
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}

export async function getRestauById(req, res) {
  try {
    var restaurant= await Restaurant.findOne({ _id: req.params.id }).populate("menu.sectionCategories.cat")
    
    return res.status(200).json(restaurant);

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

export async function getDishesByCategory(req, res) {
  try {
    const dishes = await Dish.find({restaurant: req.params.restauId, category: req.params.categoryId}).populate("category") 
    console.log("dishes: "+dishes)
    return res.status(200).json(dishes);

  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}

export async function getDishById(req, res) {
  try {
    const dish = await Dish.findOne({ _id: req.params.id }).populate("category")
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


export async function getAllCategories(req, res) {
  try {
    Category.find({}, function (err, categories) {
      return res.status(200).json(categories);
    });
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}
export async function createCategory(req, res) {
  try {
    if(!req.body.name || !req.body.averagePrice || !req.body.waitTime || !req.body.pic) return res.status(400).json({ error : 'missing one of the required fields'})
      let category = new Category(); 
      category.name = req.body.name;
      category.averagePrice = req.body.averagePrice;
      category.waitTime = req.body.waitTime;
      category.pic = req.body.pic;

      category = await Category.create(category)
      return res.status(200).json(category);
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}
export async function deleteCategory(req, res) {
  try {
    
      let query = { _id: req.params.id }

      Category.findById(req.params.id, function (err, r) {
        if (err) {
          return res.status(500).end()
        } else {
          Category.remove(query, function (err) {
            if (err) { console.log(err); return res.status(500).end() }
            return res.status(200).json('Success deleting Category') 
          });
        }
      });
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}

export async function getAllDishes(req, res) {
  try {
    var dishes = await Dish.find().populate("category")

    return res.status(200).json(dishes);
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}
export async function createDish(req, res) {
  try {
    if(!req.body.name || !req.body.description || !req.body.sizes || !req.body.pic) return res.status(400).json({ error : 'missing one of the required fields'})
      let dish = new Dish(); 
      dish.name = req.body.name;
      dish.description = req.body.description;
      dish.sizes = req.body.sizes;
      dish.pic = req.body.pic;
      dish.category = req.body.category;
      dish.restaurant = req.body.restaurant;

      dish = await Dish.create(dish)
      return res.status(200).json(dish);
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}
export async function deleteDish(req, res) {
  try {
    
      let query = { _id: req.params.id }

      Dish.findById(req.params.id, function (err, r) {
        if (err) {
          return res.status(500).end()
        } else {
          Dish.deleteOne(query, function (err) {
            if (err) { console.log(err); return res.status(500).end() }
            return res.status(200).json('Success deleting dish') 
          });
        }
      });
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}
export async function deleteAllDishes(req, res) {
  try {
          Dish.deleteMany({}, function (err) {
            if (err) { console.log(err); return res.status(500).end() }
            return res.status(200).json('Success deleting all dishes') 
          });
        
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


//restaus 5d86d8c2956ab02c8ce2a976 5d86d8e2956ab02c8ce2a984
//categories 5d86d8596009992b417f553e 5da4fc52b7ba832cb091f83e
