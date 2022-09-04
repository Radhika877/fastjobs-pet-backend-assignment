const uploadedFileToDBService = require("../service/uploadFileToDBService");
const allowedFileTypes = ["text/csv"];

const uploadFileData = async (req, res) => {
  try {
    const uploadedFile = req.file;
    if (
      uploadedFile === undefined ||
      !allowedFileTypes.includes(uploadedFile.mimetype)
    ) {
      return res.status(400).send({
        message:
          "This type of file is not allowed, please upload a single CSV file only.",
      });
    }
    const petData = uploadedFile.buffer;
    const pet = Buffer.from(petData, "base64").toString().trim();

    const uploadServiceResponse = await uploadedFileToDBService(pet);
    if (uploadServiceResponse.valid) {
      res.status(200).send({ message: "Uploaded pet data to the database." });
    }
  } catch (error) {
    console.log(`Error occurred while uploading pet data in the db : ${error}`);
    res.status(500).send(error);
  }
};

module.exports = uploadFileData;
