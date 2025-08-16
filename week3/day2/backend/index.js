// src/server.js
const dotenv = require('dotenv');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
const connectDB = require('./config/db');
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// DB Connection
connectDB();

// CORS Middleware (before routes)
app.use(cors({
  origin: [
    "http://localhost:5173",          // local frontend
    "https://week3d3.vercel.app"     // deployed frontend
  ],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true // if you're using cookies or Authorization headers
}));

// Middleware
app.use(express.json());

// Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/users', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

// Root route
app.get('/', (req, res) => res.send('Hello World! 🚀'));

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
app.get('/api/auth/test', (req, res) => {
  res.json({ message: "Backend is working ✅" });
});