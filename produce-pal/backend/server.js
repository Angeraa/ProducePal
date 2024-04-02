require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const produceRoutes = require('./routes/produce');

// Create an express app
const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use("/produce", produceRoutes);

// Connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Server started on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log('Connection failed: ' + error);
    });
