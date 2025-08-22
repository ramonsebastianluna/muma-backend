const express = require('express');
const testApiRoutes = require('./routes/testApi.routes');
const petRoutes = require('./routes/router_pet');


const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/test-api', testApiRoutes);
app.use('/api', petRoutes);


module.exports = app;