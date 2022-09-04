/*
Routes for all the APIs defined
*/
const express = require("express");
const connectToDB = require("../config/mongoDBConfig");
const uploadFileData = require("../controller/uploadFile");
const router = express.Router();
const multer = require("multer");
const getPetData = require("../controller/getPetData");
const getPetByPetID = require("../controller/getPetByPetID");
const deletePetByID = require("../controller/deletePetByID");
const updatePetDataByID = require("../controller/updatePetDataByID");
const upload = multer({
  dest: "uploads/",
  storage: multer.memoryStorage(),
});

connectToDB();
router.get("/", (req, res) => res.json("FastJobs.io backend assignment"));

router.post("/pet", upload.single("file"), (req, res) =>
  uploadFileData(req, res)
);

router.get("/pet", (req, res) => getPetData(req, res));

router.get("/pet/:id", (req, res) => getPetByPetID(req, res));

router.patch("/pet/:id", (req, res) => updatePetDataByID(req, res));

router.delete("/pet/:id", (req, res) => deletePetByID(req, res));

module.exports = router;
