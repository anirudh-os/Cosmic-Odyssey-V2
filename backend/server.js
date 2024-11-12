const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// Handle API requests here
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Serve the React app for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Define the port to run on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
