const pet = require("../schema/schema");

const deletePetByID = async (req, res) => {
  try {
    const { id } = req.params;
    await pet.findByIdAndDelete(id);
    return res
      .status(200)
      .send({ message: `Deleted pet document with id ${id}` });
  } catch (error) {
    console.error("Error occurred while deleting doc by :", error);
    return res.status(500).send({ message: "Error occurred" });
  }
};

module.exports = deletePetByID;
