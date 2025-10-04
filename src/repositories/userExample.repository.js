const UserExample = require('../models/userExample.model');

const findAll = () => UserExample.find();
const findById = (id) => UserExample.findById(id);
const create = (data) => UserExample.create(data);
const remove = (id) => UserExample.findByIdAndDelete(id);

module.exports = { findAll, findById, create, remove };