const service = require('../services/testApi.service');

const testApi = (req, res) => {
  const result = service.testApi();
  res.json(result);
};

// const getAll = async (req, res) => {
//   const users = await service.getUsers();
//   res.json(users);
// };

// const getOne = async (req, res) => {
//   const user = await service.getUser(req.params.id);
//   if (!user) return res.status(404).json({ message: 'No encontrado' });
//   res.json(user);
// };

// const create = async (req, res) => {
//   const user = await service.addUser(req.body);
//   res.status(201).json(user);
// };

// const remove = async (req, res) => {
//   await service.deleteUser(req.params.id);
//   res.status(204).send();
// };

module.exports = { testApi };