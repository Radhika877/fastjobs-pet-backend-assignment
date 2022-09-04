const pet = require("../schema/schema");

const getPetData = async (req, res) => {
  try {
    const petData = await pet.find({});
    return res.status(200).send(petData);
  } catch (error) {
    console.error("Error occurred while getting all pet data from db: ", error);
    return res.status(500).send({ message: "Error occurred" });
  }
};

module.exports = getPetData;
