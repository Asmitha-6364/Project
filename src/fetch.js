const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000; // Your desired port number

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'your_database_name';

// Collection Name
const collectionName = 'users';

// Create a new MongoClient
const client = new MongoClient(uri);

// Middleware to parse JSON request bodies
app.use(express.json());

// API endpoint to retrieve user data
app.get('/api/users', async (req, res) => {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to the database');

        // Select the database
        const db = client.db(dbName);

        // Select the collection
        const collection = db.collection(collectionName);

        // Query for documents
        const query = {}; // Retrieve all users

        // Find documents that match the query
        const users = await collection.find(query).toArray();

        // Send the retrieved users as a response
        res.json(users);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        // Close the client
        await client.close();
        console.log('Connection closed');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
