const repository = require('../repositories/userExample.repository');

const getUsers = () => repository.findAll();
const getUser = (id) => repository.findById(id);
const addUser = (data) => repository.create(data);
const deleteUser = (id) => repository.remove(id);

module.exports = { getUsers, getUser, addUser, deleteUser };