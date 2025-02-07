const express = require('express');
const passport = require('passport');
const router = express.Router();

// Route to start Google authentication
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route for Google authentication
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect to home.
    res.redirect('/');
  }
);

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;
