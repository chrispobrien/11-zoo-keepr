const express = require('express');
const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals.json');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());

// Make certain files readily available - not as an endpoint
app.use(express.static('public'));

// Add routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log('API server now on port 3001!');
});
