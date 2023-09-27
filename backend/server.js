const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

// Define the URL of the external API (JSONPlaceholder)
const externalApiUrl = 'https://jsonplaceholder.typicode.com/todos';

// API route to fetch Todo data from the external API
app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get(externalApiUrl);
    const todos = response.data;
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
