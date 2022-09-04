const csvJSON = require("../utils/convertCSVToJSON");
const petSchema = require("../schema/schema");

const uploadedFileToDBService = async (pet) => {
  try {
    const petDataJson = csvJSON(pet);
    await Promise.all(
      petDataJson.map(async (item) => {
        const petObject = new petSchema({
          name: item.name,
          type: item.type,
          breed: item.breed,
          age: item.age,
        });
        await petObject.save();
      })
    );
    return {
      message: "Uploaded File to DB",
      valid: true,
    };
  } catch (error) {
    console.error("Error occurred :", error);
    return {
      valid: false,
    };
  }
};

module.exports = uploadedFileToDBService;
