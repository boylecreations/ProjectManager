// app/routes.js

// grab the route models
var User           = require('./models/user');
var Project        = require('./models/project');
var path           = require('path');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // users api route
        app.get('/api/users', function(req, res) {
            // use mongoose to get all users in the database
            User.find(function(err, users) {

                // if there is an error retrieving, send the error.
                if (err) res.send(err);
                res.json(users); // return all users in JSON format
            });
        });


        app.get('/api/projects', function(req, res) {
            // use mongoose to get all users in the database
            Project.find(function(err, projects) {

                // if there is an error retrieving, send the error.
                if (err) res.send(err);
                res.json(projects); // return all users in JSON format
            });
        });


        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendFile('index.html', { root: path.join(__dirname, '../public/views/') });
        });

    };
