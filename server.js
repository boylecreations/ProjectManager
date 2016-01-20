// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan         = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

/// configuration ===========================================

// config files
var db = require('./config/db');

// mongoose models
var User = require('./app/models/user');
var Project = require('./app/models/project');

// connect to mongoDB Database
mongoose.connect(db.url);
