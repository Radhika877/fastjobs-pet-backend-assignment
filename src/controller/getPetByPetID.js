const pet = require("../schema/schema");

const getPetByPetID = async (req, res) => {
  try {
    const { id } = req.params;
    const petDataByID = await pet.findById(id);
    res.send(petDataByID);
  } catch (error) {
    console.error("Error occurred ");
  }
};

module.exports = getPetByPetID;
