const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/User'); // Import the User model

require('dotenv').config(); // Load environment variables from .env file

const clientID = process.env.CLIENT_ID; // Read Google OAuth client ID from .env
const clientSecret = process.env.CLIENT_SECRET; // Read Google OAuth client secret from .env

if (!clientID || !clientSecret) {
  throw new Error('Missing CLIENT_ID or CLIENT_SECRET in .env file');
}
passport.use(new GoogleStrategy({
  clientID: clientID,  // Replace with your Google OAuth client ID
  clientSecret: clientSecret,  // Replace with your Google OAuth client secret
  callbackURL: 'http://localhost:3000/auth/google/callback',  // The URL Google will redirect to after authentication
}, async (token, tokenSecret, profile, done) => {
  try {
    // Find or create a user in your database
    let user = await User.findOne({ googleId: profile.id });

    if (!user) {
      // If no user exists, create one
      user = new User({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
      });
      await user.save();
    }

    // Return the user profile
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id); // Store user ID in session
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user); // Attach user object to the session
  } catch (err) {
    done(err, null);
  }
});
