const {Pet } = require('../models/pet_model');


// Create a new pet
module.exports.createPet = (req, res) => {
      console.log('Body recibido:', req.body);
    Pet.create(req.body)
       .then((newPet) => {
          return res.status(201).json(newPet);
       })
       .catch((err) => {
            console.log(err.message); 
            res.statusMessage = err.message;
            return res.status(400).json({ message: err.message}); 
         });
};

// Get all pets
module.exports.getAllPets = (req, res) => {
    Pet.find()
        .then(listPets => {
            return res.status(200).json(listPets);
        })
        .catch(err => {
            console.log(err.message);
            res.statusMessage = err.message;
            return res.status(400).json({ message: err.message });
        });
};

// Get a pet by ID
module.exports.getPetById = (req, res) => {
    Pet.findOne({ _id: req.params._id })
        .then(pet => {
            if (!pet) {
                res.statusMessage = 'Mascota no encontrada';
                return res.status(404).json({ message: 'Mascota no encontrada.' });
            }
            return res.status(200).json(pet);
        })
        .catch(err => {
            console.log(err.message);
            res.statusMessage = err.message;
            return res.status(400).json({ message: err.message });
        });
};

// Delete a pet by ID
module.exports.deletePet = (req, res) => {
    Pet.findOneAndDelete({ _id: req.params._id })
        .then(() => {
          return res.status(200).json({message: 'Mascota eliminada correctamente.'});
         })
         .catch(err => {
               console.log(err.message);
               res.statusMessage = err.message;
               return res.status(400).json({ message: err.message });

        });
};

// Update a pet by ID (if needed in the future)
module.exports.editPet= (req, res) => {
   const fieldsToUpdate =  {}; 
   const {
      petName,
      race, 
      type, 
      size,
      temperamentWithAnimals, 
      temperamentWithPeople,
       location, 
       birthDate, 
       description, 
       gender,
      image 
   } = req.body;
    
   console.log("ID recibido:", req.params._id);
   console.log("Body recibido:", req.body);


   if(petName) {
      fieldsToUpdate.petName = petName;
   }
   if(race) {
      fieldsToUpdate.race = race; 
   }
   if(type) {
      fieldsToUpdate.type = type; 
   }
   if(size) {
      fieldsToUpdate.size = size; 
   }
   if(temperamentWithAnimals) {
      fieldsToUpdate.temperamentWithAnimals = temperamentWithAnimals; 
   }
   if(temperamentWithPeople) {
      fieldsToUpdate.temperamentWithPeople = temperamentWithPeople; 
   }
   if(location) {
      fieldsToUpdate.location = location; 
   }
   if(birthDate) {
      fieldsToUpdate.birthDate = birthDate; 
   }
   if(description) {
      fieldsToUpdate.description = description; 
   }
   if(gender) {
      fieldsToUpdate.gender = gender; 
   }
   if(image) {
      fieldsToUpdate.image = image; 
   }

   Pet.findOneAndUpdate(
      { _id: req.params._id },
     fieldsToUpdate, {
    new: true,
  })
    .then((pet) => {
      return res.status(200).json(pet);
    })
    .catch((error) => {
      return res.status(400).json({ message: error.message });
    });
};

