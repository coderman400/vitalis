const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
require('./config/passport'); // Initialize Passport.js configuration

const app = express();
const PORT = 3000;

// Connect to MongoDB (adjust the URI as needed)
mongoose.connect('mongodb://localhost/db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json());

// Session configuration
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Use authentication routes
app.use('/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
