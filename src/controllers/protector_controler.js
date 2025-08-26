const {Protector } = require('../models/protector_model');

const { addPetToUser } = require('../services/petService');

// Create a new protector
module.exports.createProtector = async (req, res) => {
  try {
    console.log("Body recibido:", req.body);


   
    const existingProtector  = await Protector.findOne({ email: req.body.email });

    if (existingProtector ) {
      return res.status(400).json({ 
        message: "Ya existe una protectora registrada con este correo." 
      });
    }

   
    const newProtector = await Protector.create(req.body);
    return res.status(201).json(newProtector);

  } catch (err) {
    console.error(err.message);
    return res.status(400).json({ message: err.message });
  }
};


// Get all protectors
module.exports.getAllProtectors = (req, res) => {
    Protector.find()
        .then(listProtectors => {
            return res.status(200).json(listProtectors);
        })
        .catch(err => {
            console.log(err.message);
            res.statusMessage = err.message;
            return res.status(400).json({ message: err.message });
        });
}

// Get a protector by ID
module.exports.getProtectorById = (req, res) => {
    Protector.findOne({ _id: req.params._id })
        .then(protector => {
            if (!protector) {
                res.statusMessage = 'Protector no encontrado';
                return res.status(404).json({ message: 'Protector no encontrado.' });
            }
            return res.status(200).json(protector);
        })
        .catch(err => {
            console.log(err.message);
            res.statusMessage = err.message;
            return res.status(400).json({ message: err.message });
        });
}   
// Delete a protector by ID
module.exports.deleteProtector = (req, res) => {
    Protector.findOneAndDelete({ _id: req.params._id })
        .then(() => {
          return res.status(200).json({message: 'Protector eliminado correctamente.'});
         })
         .catch(err => {
               console.log(err.message);
               res.statusMessage = err.message;
               return res.status(400).json({ message: err.message });

        });

}
// Update a protector by ID

module.exports.editProtector= (req, res) => {
    const fieldsToUpdate =  {}; 
    const {
        protectorName,
        description,
        email,
        password,
        city,
        streets,
        logo
    } = req.body;    
    if (protectorName) fieldsToUpdate.protectorName = protectorName;
    if (description) fieldsToUpdate.description = description;
    if (email) fieldsToUpdate.email = email;
    if (password) fieldsToUpdate.password = password;
    if (city) fieldsToUpdate.city = city;
    if (streets) fieldsToUpdate.streets = streets;
    if (logo) fieldsToUpdate.logo = logo;

    
    Protector.findOneAndUpdate(
        { _id: req.params._id },
        { $set: fieldsToUpdate },
        { new: true }
    )
    .then(updatedProtector => {
        if (!updatedProtector) {
            res.statusMessage = 'Protector no encontrado';
            return res.status(404).json({ message: 'Protector no encontrado.' });
        }
        return res.status(200).json(updatedProtector);
    })
    .catch(err => {
        console.log(err.message);
        res.statusMessage = err.message;
        return res.status(400).json({ message: err.message });
    });
    }


// Add a pet to a protector's pets_adoption array

module.exports.addPetToProtector = async (req, res) => {
  try {
    const protector = await addPetToUser(Protector, req.params._id, req.body, 'pets_adoption');
    return res.status(200).json(protector);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};


