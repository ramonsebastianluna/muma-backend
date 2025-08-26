
// services/petService.js
module.exports.addPetToUser = async function(userModel, userId, petData, petArrayName) {
    
  // userModel: Protector o PetOwner
  // userId: _id del usuario
  // petData: objeto Pet a agregar
  // petArrayName: nombre del campo donde se agregan las mascotas ('pets_adoption', 'adoptedPets', etc.)

  const user = await userModel.findById(userId);
  if (!user) throw new Error('Usuario no encontrado');

//Very important to avoid duplicate pets by name
  const exists = user[petArrayName].some(p => p.petName === petData.petName);
  if (exists) throw new Error('La mascota ya está en la lista');

  user[petArrayName].push(petData);
  await user.save();
  return user;
};
