const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

console.log('environment    ', process.env.ENVIRONMENT)
console.log('PORT    ', process.env.PORT)
console.log('MONGO_CONNECTION_STRING    ', process.env.MONGO_CONNECTION_STRING)
if(process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config()
}

const app = express();
const PORT = process.env.PORT || 3080;

// Middleware
app.use(cors());

// Define the URL of the external API (JSONPlaceholder)
const externalApiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Test route
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// API route to fetch product data from the external API
app.get('/api/products', async (req, res) => {
    try {
        // Call the external API to get the product data
        const response = await axios.get(externalApiUrl);

        // Slice the response to only include the first 12 products
        const products = response.data.slice(0, 12);
        
        // return the products as JSON
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Frontend route inside docker container
app.use(express.static(path.join(__dirname, './frontend/build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
