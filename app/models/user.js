// app/models/user.js

var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String },
  admin: Boolean,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date,
  hash: String,
  salt: String
});

userSchema.pre('save', function(next) {
    // get the Date
    var currentDate = new Date();

    //change the udpated_at field to current Date
    this.updated_at = currentDate;

    // if created_at doesnt exist, add the field
    if(!this.created_at)
      this.created_at = currentDate;
    next();
});

userSchema.methods.validateUser = function() {
  if (err) throw err;
  console.log("User Validated");
}

userSchema.methods.timeStamp = function() {
  if (err) throw err;
  console.log("Timestamp applied");
}
