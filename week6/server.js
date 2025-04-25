const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/CatDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, 'views')));

// Routes
const projectRoutes = require('./routes/projectRoutes');
app.use(projectRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});