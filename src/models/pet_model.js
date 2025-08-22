
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  
  petName: { 
    type: String, 
    required: [true, 'Por favor proporciona el nombre.'],
    minLength: [3, 'Por favor proporciona un nombre real.']
  },
  race: { 
    type: String ,
    required: [true, 'Por favor proporciona una raza real.'],
    minLength: [3, 'Por favor proporciona un nombre real.']

  },

  type: {  
    type: String ,
    required: [true, 'Por favor proporcione el tipo de animal.'],
  
  },

  size: { 
    type: String,
    required: [true, 'Por favor proporcione el tamaño del animal.'],

   },

  temperamentWithAnimals: { 
    type: String,
    minLength: [4, 'Por favor proporciona un temperameto real.']

  },
  temperamentWithPeople: { 
    type: String,
    minLength: [4, 'Por favor proporciona un temperameto real.']

  },
  location: { 
    type: String,
    minLength: [4, 'Por favor proporciona una ubicación real.']
  },
  birthDate: { 
    type: Date,
  },
  description: { 
    type: String,
    minLength: [3, 'Por favor proporciona una descripción real.']
  },
  gender: { 
    type: String, 
    minLength: [3, 'Por favor proporciona un genero real.'],
  },
  image: { 
    type: String 
  },

}, 
{ timestamps: true});

//Create the model and export it
const  Pet = mongoose.model('Pet', petSchema);
module.exports = {Pet, petSchema};
