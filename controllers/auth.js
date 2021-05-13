// const User = require("../models/user");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const cookieSession = require('cookie-session');


module.exports = (app) => {
   console.log("Check 3")
   // TODO: Implement authentication controller.
   // passport.authenticate middleware is used here to authenticate the request
   app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
   
   app.get('/auth/google/callback', 
      passport.authenticate('google', { failureRedirect: '/login' }),
      function(req, res) {
         // Successful authentication, redirect home.
         res.redirect('/');
   });

   // Secret route
   // app.get('/secret', isUserAuthenticated, (req, res) => {
   //    res.send('You have reached the secret route');
   // });

   // Logout route
   app.get('/logout', (req, res) => {
      req.logout(); 
      res.redirect('/');
   });
}
