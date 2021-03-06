const express = require('express');
const router = express.Router();

// Models
let User = require('./user');


//DONE
export async function getAllUsers(req, res) {
  try {
    
      User.find().exec(function(err, users) {
        return res.status(200).json(users);
    });
    
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}

//DONE
export async function getUserById(req, res) {
  try {
    //let user = await User.find({ _id: req.body.id })

    User.findById(req.params.id, (err, user) => {
      return res.status(200).json(user)
    });
    

  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}

//DONE
export async function deleteUser(req, res) {
  try {

    let query = { _id: req.params.id }

    User.findById(req.params.id, function (err, user) {
      if (err) {
        return res.status(500).end();
      } else {
        User.remove(query, function (err) {
          if (err) {
            console.log(err);
          }
          return res.send(200).json('Success');
        });
      }
    });
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}

//DONE and tested for token
export async function updateProfile(req, res) {
  try {
    req.user.fullname = req.body.fullname
    req.user.email = req.body.email
    req.user.address = req.body.address
    req.user.phone = req.body.phone
    req.user.pic = req.body.pic

    await req.user.save()
    return res.status(204).end()

  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
}

module.exports = router;
