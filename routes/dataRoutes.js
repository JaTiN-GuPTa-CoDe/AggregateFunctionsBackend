// routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const dataController = require('../controller/dataController');

// Route to add data
router.post('/data', dataController.addData);

// Route to get aggregated data
router.get('/aggregate', dataController.getAggregatedData);

module.exports = router;
