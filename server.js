// Server uses express
const express = require('express');

// Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true}));

// Parse incoming JSON data
app.use(express.json());

// Make public files readily available - not as an endpoint
app.use(express.static('public'));

// Add routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// If environment doesn't already define PORT, use 3001
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Note Taker listening on port ${PORT}!`);
})