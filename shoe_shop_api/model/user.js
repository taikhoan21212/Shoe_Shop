const mongoose = require("mongoose");
require('mongoose-type-email');

const userSchema = new mongoose.Schema({
  fullname: {type: String},
  username: {type: String,required: true,unique: true,},
  email: {type: mongoose.SchemaTypes.Email, unique: true},
  status: {type: Number,},
  password: { type: String, required: true },
  isAdmin: {type: Boolean,default: false},
  uid: {type: mongoose.Schema.Types.ObjectId,},

},{ timestamps: true });

module.exports = mongoose.model("User", userSchema );
