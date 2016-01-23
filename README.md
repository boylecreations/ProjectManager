# ProjectManager
MEAN stack portfolio manager

This is starting out just as a duplication of my current website, but I am integrating some forms that use angular to push data to an api with nodejs. It will be using mongoose for the schema and expressjs for quick deployment.

------------------------------------------------------------------------

Schemas should include Projects and Users for clients with angular directives and services. Passport with crypto and jsonwebtoken will be used to authenticate users in to protect the data.

------------------------------------------------------------------------

If pulled, this won't work without creating a config folder at the root, and adding a db.js file. This is for holding the database credentials.

You will want to paste in:

module.exports = {
       url : 'your db host, username and password credentials'
}
