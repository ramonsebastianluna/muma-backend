const mongoose = require('mongoose'); 
const {petSchema} = require('./pet_model');

// Define the PetOwner schema
const petOwnerSchema = new mongoose.Schema({
    protective_name: {
        type: String,
        required: [true, 'Por favor proporciona el nombre.'],
        minLength: [3, 'Por favor proporciona un nombre real.']
    },
    description: {
        type: String,
        required: [true, 'Por favor proporciona una descripción.'],
        minLength: [10, 'Por favor proporciona una descripción real.']
    },
    email: {
        type: String,
        required: [true, 'Por favor proporciona un correo electrónico.'],
        match: [/^\S+@\S+\.\S+$/, 'Por favor proporciona un correo electrónico válido.']
    }, 
    password: {
        type: String,
        required: [true, 'Por favor proporciona una contraseña.'],
        minLength: [6, 'Por favor proporciona una contraseña más segura.']
    },
    city: {
        type: String,
        required: [true, 'Por favor proporciona una ciudad.'],
        minLength: [3, 'Por favor proporciona una ciudad real.']
    },
    streets: {
        type: String,
        required: [true, 'Por favor proporciona una dirección.'],
        minLength: [5, 'Por favor proporciona una dirección real.']
    }, 
    pets_adoption: [petSchema], 
    logo: {
        type: String
    }
 }, { timestamps: true });
   

// Create the Protector model using the petOwnerSchema

const Protector = mongoose.model('Protector', petOwnerSchema);
module.exports = { Protector, petOwnerSchema };



