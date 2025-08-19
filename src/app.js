const express = require('express');
const testApiRoutes = require('./routes/testApi.routes');


const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/test-api', testApiRoutes);


module.exports = app;