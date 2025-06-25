const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

// Routes
const serviceRoutes = require("./routes/serviceRoutes");
app.use("/api/services", serviceRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Glorious Farming Backend Running");
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
