const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Assuming you have a User model
require("dotenv/config");

const router = express.Router();
const GOOGLE_CLIENT_ID = process.env.CLIENT_ID;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

async function verifyGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });
    return { payload: ticket.getPayload() };
  } catch (error) {
    console.error("[Google Auth Error]", error);
    return { error: "Invalid user detected. Please try again" };
  }
}

router.post("/signup", async (req, res, next) => {
  try {
    if (!req.body.credential) {
      return res.status(400).json({ message: "Missing credential" });
    }

    const verificationResponse = await verifyGoogleToken(req.body.credential);
    if (verificationResponse.error) {
      return res.status(400).json({ message: verificationResponse.error });
    }

    const profile = verificationResponse.payload;

    // Check if user already exists
    let user = await User.findOne({ email: profile.email });
    if (user) {
      return res.status(400).json({ message: "User already exists. Please log in." });
    }

    // Save new user
    user = new User({
      firstName: profile.given_name,
      lastName: profile.family_name,
      email: profile.email,
      picture: profile.picture,
    });

    await user.save();

    res.status(201).json({
      message: "Signup was successful",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        picture: user.picture,
        email: user.email,
        token: jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" }),
      },
    });
  } catch (error) {
    console.error("[Signup Error]", error);
    next(error); // Pass to error middleware
  }
});

router.post("/login", async (req, res) => {
  try {
    if (req.body.credential) {
      const verificationResponse = await verifyGoogleToken(req.body.credential);

      if (verificationResponse.error) {
        return res.status(400).json({
          message: verificationResponse.error,
        });
      }

      const profile = verificationResponse?.payload;

      // Check if the user exists in the database
      const user = await User.findOne({ email: profile?.email });

      if (!user) {
        return res.status(400).json({
          message: "You are not registered. Please sign up",
        });
      }

      res.status(200).json({
        message: "Login was successful",
        user: {
          firstName: profile?.given_name,
          lastName: profile?.family_name,
          picture: profile?.picture,
          email: profile?.email,
          token: jwt.sign({ email: profile?.email }, process.env.JWT_SECRET, {
            expiresIn: "1d",
          }),
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
});

module.exports = router;
