const express = require('express');
const router = express.Router();

// Models
let Restaurant = require('../restaurant/restaurant');
let User = require('../user/user');
let Delivery = require('./delivery');



export async function checkOutDish(req, res) {
  try {
    let delivery = new Delivery();
    delivery.dishName = req.body.dishName
    delivery.createdAt = req.body.createdAt
    delivery.dishId = req.body.dishId
    delivery.nbr = req.body.nbr
    delivery.size = req.body.size
    delivery.total = req.body.total
    delivery = await Delivery.create(delivery)

    return res.status(200).json(delivery.toJSON)

  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}

export async function GetDeliveryById(req, res) {
  try {
    const delivery = await Feed.findOne({ _id: req.params.id })
    return res.status(200).json(delivery);
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}