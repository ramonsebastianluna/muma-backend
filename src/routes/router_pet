const express = require('express');
const routerPet = express.Router();
const petController = require('../controllers/pet_controller');

routerPet.post('/pet/new', petController.createPet);
routerPet.get('/pet/pets', petController.getAllPets);
routerPet.get('/pet/:_id', petController.getPetById);
routerPet.delete('/pet/delete/:_id', petController.deletePet);
routerPet.put('/pet/edit/:_id', petController.editPet);


module.exports = routerPet;