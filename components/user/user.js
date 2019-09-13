const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname:{
      type: String
    },
    email:{
      type: String
    },
    password:{
      type: String
    },
    address:{
      type: String
    },
    phone:{
        type: String
    },
    pic:{
        type: String
    },
    token:{
        type: String
    }
  });

 const User = module.exports = mongoose.model('User', userSchema);
