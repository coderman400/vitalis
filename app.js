const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // Import authentication routes
require('./config/passport'); // Import passport configuration

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost/google-auth', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Authentication routes
app.use('/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Hello, welcome to the Google Auth app!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
