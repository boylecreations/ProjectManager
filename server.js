// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan         = require('morgan');

var mongoose       = require('mongoose');

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

// set our port
var port = process.env.PORT || 8080;
// get all data/stuff of the body (POST) parameters

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.redirect('/api/users');
    //res.json({ message: 'hooray! welcome to our api!' });
    //next();
});

// on routes that end in /bears
// ----------------------------------------------------
router.route('/users')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var user = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            avatar: req.body.avatar,
            admin: false,
            meta: {
                age: req.body.age,
                website: req.body.website
            }
        });      // create a new instance of the Bear model
        //user.name = req.body.name;  // set the bears name (comes from the request)
        //user.username = req.body.username
        //return res.json({ message: req.body.name});
        //bear.name = 'Bumblebeetuna';
        //bear.color = 'Brown';

        // save the bear and check for errors
        user.save(function(err) {
            if (err) {
                console.log(err);
                res.send({
                    message: 'Something went Wrong during Submission'
                });
            } else {
                res.send({
                    message: 'User created Successfully'
                });
            }
        });
    })

    .get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);
            res.json(users);
        });
    });

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/users/:user_id')

// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })

    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {

        // use our bear model to find the bear we want
        User.findById(req.params.user_id, function(err, user) {

            if (err)
                res.send(err);

            //bear.name = req.body.name;  // update the bears info
            //var user = new User({
                user.name = req.body.name;
                user.username = req.body.username;
                user.password = req.body.password;
                user.email = req.body.email;
                user.avatar = req.body.avatar;
                user.admin = false;
                user.meta.age = req.body.age;
                user.meta.website = req.body.website;

            //});
            user.__v++;

            // save the bear
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User updated!' });
            });

        });
    })

    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        User.remove({
            _id: req.params.user_id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./app/routes')(app); // (app) configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;
