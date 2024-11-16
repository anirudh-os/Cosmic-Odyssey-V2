const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Use bodyParser to parse JSON data
app.use(bodyParser.json());

// Allow cross-origin requests (for local dev)
app.use(cors());

// Connect to MongoDB (use your connection string here)
mongoose.connect('mongodb://localhost:27017/cosmic_odyssey', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Define the user schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create the user model
const User = mongoose.model('User', userSchema);

// POST route to handle user sign-up
app.post('/api/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Validate the input (you can add more validation if needed)
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user
    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();

    // Send success response
    res.status(201).json({ message: 'User created successfully', newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// API route (existing)
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
