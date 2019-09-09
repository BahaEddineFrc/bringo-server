const express = require('express');
const router = express.Router();

// Models
let User = require('../models/user');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// Get All Users
router.get('/users', function(req, res){
  console.log("Someone's trying to fetch users");
    User.find({},function(err, users){
    res.send(users);
  });
});

// Get Single user
router.get('/user/:id', function(req, res){
    User.findById(req.params.id, function(err, user){
      res.send(user);
    });
  });

  // POST Single User
router.post('/user', function(req, res){
  console.log("Someone's trying to add user"+req);

    //req.checkBody('email','email is required').notEmpty();
    //req.checkBody('password','password is required').notEmpty();
  
    // Get Errors
    let errors = false//req.validationErrors();
  
    if(errors){
        console.log(errors);
    } else {
      let user = new User();
      user.fullname = req.body.fullname;
      user.email = req.body.email;
      user.password = req.body.password;
      user.address = req.body.address;
      user.phone = req.body.phone;
  
      user.save(function(err){
        if(err){
          console.log(err);
          return;
        } else {
          //req.flash('success','Article Added');
          res.send(user)
        }
      });
    }
  });


// Delete Single User
router.delete('/:id/delete', function(req, res){
    if(!req.user._id){
      //res.status(500).send();
    }
  
    let query = {_id:req.params.id}
  
    User.findById(req.params.id, function(err, user){
      if(err){
        res.status(500).send();
      } else {
        User.remove(query, function(err){
          if(err){
            console.log(err);
          }
          res.send('Success');
        });
      }
    });
});

module.exports = router;
