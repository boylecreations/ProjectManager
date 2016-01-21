// app/models/user.js

var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;

// create a schema

var projectSchema = new Schema({
  name: String,
  client: String,
  client_url: String,
  project_url: String,
  testimonial: String,
  cover_img: String,
  thumb_img: String
  created_at: Date,
  updated_at: Date,
  hash: String,
  salt: String
});

projectSchema.pre('save', function(next) {
    // get the Date
    var currentDate = new Date();

    //change the udpated_at field to current Date
    this.updated_at = currentDate;

    // if created_at doesnt exist, add the field
    if(!this.created_at)
      this.created_at = currentDate;
    next();
});

projectSchema.methods.validateUser = function() {
  if (err) throw err;
  console.log("User Validated");
}

projectSchema.methods.timeStamp = function() {
  if (err) throw err;
  console.log("Timestamp applied");
}

// make this available to our users in our Node applications
module.exports = mongoose.model('Project', projectSchema);
