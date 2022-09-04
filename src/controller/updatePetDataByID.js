const pet = require("../schema/schema");

const updatePetDataByID = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, breed, age } = req.body;
    const filter = { _id: id };
    const update = {
      $set: { name: name, type: type, breed: breed, age: age },
    };
    const opts = { returnDocument: "after" };
    let doc = await pet.findOneAndUpdate(filter, update, opts);
    return res.status(200).send({ "Updated document": doc });
  } catch (error) {
    console.error("Error occurred while updating ", error);
    return res.status(500).send({ message: "Error occurred" });
  }
};

module.exports = updatePetDataByID;
