const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // TODO: Implement actual authentication logic
    // This is just a placeholder response
    if (email && password) {
      res.json({
        success: true,
        message: "Login successful",
        token: "dummy-token",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
