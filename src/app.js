const express = require('express');
const testApiRoutes = require('./routes/testApi.routes');
const dbConnect = require('./config/database');

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/test-api', testApiRoutes);

// Conectar a la base de datos
dbConnect();

module.exports = app;