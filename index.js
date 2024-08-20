const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');

const { dbConnect } = require('./config/Db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

dbConnect();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Use the routes defined in dataRoutes
app.use('/api', dataRoutes);

// MongoDB connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});         