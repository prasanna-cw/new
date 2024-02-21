const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

app.use(session({
  secret: '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',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: '510232580984-61c9emssljjjhl751ht6jnvfo2fe1be6.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // You can handle user data here
    return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Sign in with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  // passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/profile');
  });

app.get('/profile', (req, res) => {
  res.redirect("https://rnddijomatrix.spotft.com/template/");
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
