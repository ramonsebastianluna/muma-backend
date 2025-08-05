//const User = require('../models/user.model');

// respuesta de api funcionando
const testApi = () => {
  return {
    message: 'API funcionando',
  };
};

// const findAll = () => User.find();
// const findById = (id) => User.findById(id);
// const create = (data) => User.create(data);
// const remove = (id) => User.findByIdAndDelete(id);

module.exports = { testApi };