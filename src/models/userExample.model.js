const mongoose = require('mongoose');

const userExampleSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model('UserExample', userExampleSchema);