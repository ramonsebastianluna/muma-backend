
const mongoose = require('mongoose');
// Import the pet_model schema to reference in adoptedPets and favoritePets
const {pet_model} = require('./pet_model');

// Define the PetOwner schema
const petOwnerSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: [true, 'Por favor proporciona el nombre.'],
    minLength:[3, 'Por favor proporciona un nombre real.']
  },
  lastName: { 
    type: String,
    required: [true, 'Por favor proporciona el apellido.'],
    minLength: [3, 'Por favor proporciona un apellido real.']
 },
  password: { 
    type: String,
    required: [true, 'Por favor proporcione su contraseña'],
    minLength: [3, 'Por favor proporciona una contraseña más segura']    
  },
  image: {
     type: String 
  }, 
  adoptedPets: [pet_model],
  favoritePets: [pet_model],
},
{ timestamps: true });

// Create the PetOwner model using the petOwnerSchema
const PetOwner = mongoose.model('PetOwner', petOwnerSchema); 
module.export = {PetOwner, petOwnerSchema};