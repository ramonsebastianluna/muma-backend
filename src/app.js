const express = require('express');
const testApiRoutes = require('./routes/testApi.routes');
const petRoutes = require('./routes/router_pet');
const protectorRoutes = require('./routes/router_protector');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/test-api', testApiRoutes);
app.use('/api', petRoutes);
app.use('/api', protectorRoutes);

module.exports = app;