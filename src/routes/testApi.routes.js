const express = require('express');
const controller = require('../controllers/testApi.controller');

const router = express.Router();

router.get('/', controller.testApi);

// router.get('/', controller.getAll);
// router.get('/:id', controller.getOne);
// router.post('/', controller.create);
// router.delete('/:id', controller.remove);

module.exports = router;