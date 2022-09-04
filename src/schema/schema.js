const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const petSchema = new Schema({
  name: String,
  type: String,
  breed: String,
  age: String,
});

const pet = model("Pet", petSchema);

module.exports = pet;
