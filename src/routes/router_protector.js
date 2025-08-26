
const express = require('express');
const routerProtector = express.Router();
const protectorController = require('../controllers/protector_controler');

routerProtector.post('/protector/new', protectorController.createProtector);
routerProtector.get('/protector/protectors', protectorController.getAllProtectors);
routerProtector.get('/protector/:_id', protectorController.getProtectorById);
routerProtector.delete('/protector/delete/:_id', protectorController.deleteProtector);
routerProtector.put('/protector/edit/:_id', protectorController.editProtector);
routerProtector.put('/protector/assignPet/:_id', protectorController.addPetToProtector);



module.exports = routerProtector;