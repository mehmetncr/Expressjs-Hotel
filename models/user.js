// user.js
const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  surName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  eMail: {
    type: String,
    required: true,
  },
})


module.exports=Mongoose.model('user',UserSchema)