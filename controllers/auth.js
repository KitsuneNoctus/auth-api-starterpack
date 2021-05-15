const jwt = require('jsonwebtoken');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const cookieSession = require('cookie-session');


module.exports = (app) => {
   console.log("Check 3")
   // TODO: Implement authentication controller.
   // passport.authenticate middleware is used here to authenticate the request
   app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
   
   // http://localhost:3000/auth/google/callback
   app.get('/auth/google/callback', 
      passport.authenticate('google', { failureRedirect: '/login' }),
      function(req, res) {
         // Successful authentication, redirect home.
         res.redirect('/');
   });

   // Logout route
   app.get('/logout', (req, res) => {
      req.logout(); 
      res.redirect('/');
   });
}
