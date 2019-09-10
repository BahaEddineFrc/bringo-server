const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    password:{
      type: String,
      required: true
    },
    address:{
      type: String,
      required: true
    },
    phone:{
        type: String,
        required: true
    },
    pic:{
        type: String
    }
  });

  //custom method to generate authToken 
UserSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ _id: this._id}, config.get('myprivatekey')); //get the private key from the config file -> environment variable
  return token;
}


//function to validate user 
function validateUser(user) {
  const schema = {
    fullname: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(3).max(255).required()
  };

  return Joi.validate(user, schema);
}

 const User = mongoose.model('user', userSchema);

 exports.User = User; 
exports.validate = validateUser;
