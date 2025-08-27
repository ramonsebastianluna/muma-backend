const express = require('express');
const authRoutes = require('./routes/auth.routes');
const dbConnect = require('./config/database');

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);

// Conectar a la base de datos
dbConnect();

module.exports = app;