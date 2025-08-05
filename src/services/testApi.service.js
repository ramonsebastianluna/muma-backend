const repository = require('../repositories/testApi.repository');

const testApi = () => repository.testApi();
// const getUsers = () => repository.findAll();
// const getUser = (id) => repository.findById(id);
// const addUser = (data) => repository.create(data);
// const deleteUser = (id) => repository.remove(id);

module.exports = { testApi };