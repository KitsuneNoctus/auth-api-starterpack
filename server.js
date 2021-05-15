require('dotenv').config();

const express = require('express');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const cookieSession = require('cookie-session');

const app = express();
app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressValidator());
app.use(cookieParser());

require('./data/bookeepr-db');

// Middleware
const exphbs  = require('express-handlebars');

// cookieSession config
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
  keys: ['randomstringhere']
}));

app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

var userProfile;

// Strategy config
passport.use(new GoogleStrategy({
  // https://www.loginradius.com/blog/async/google-authentication-with-nodejs-and-passportjs/
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
  // callbackURL: "https://bookeepr-bew.herokuapp.com/auth/google/callback"
},
  function(accessToken, refreshToken, profile, done) {
    userProfile=profile;
    return done(null, userProfile);
  }
));

console.log("Check 1")
// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
  done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
  console.log("Check 1isAuth")
  if (req.user) {
      next();
  } else {
      res.send('You must login!');
  }
}

app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Controllers
console.log("Check 2")
require('./controllers/landing.js')(app);
require('./controllers/auth.js')(app);
require('./controllers/contacts.js')(app);

app.listen(process.env.PORT || 3000, () => {
    console.log('API listening on port http://localhost:3000!');
});

module.exports = app;
