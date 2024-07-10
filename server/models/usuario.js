const mongoose = require('mongoose');

// Define el esquema de Usuario utilizando mongoose.Schema
const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Otros campos del usuario si los tienes
});

// Crea el modelo Usuario utilizando el esquema definido
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = { Usuario };
