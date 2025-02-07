const express = require("express");
const cors = require("cors");
require("dotenv/config");
const mongoose = require("mongoose");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware for logging all requests
app.use(morgan("combined")); // Logs method, URL, status, response time

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Error logging middleware
app.use((err, req, res, next) => {
  console.error(`[ERROR] ${req.method} ${req.url} -`, err.message);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(5152, () => console.log("Server running on port 5152"));
