const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const password = encodeURIComponent("Rad13@pra");
    mongoose.connect(
      `mongodb+srv://radhika:${password}@cluster0.yeyybqi.mongodb.net/Pet?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
  } catch (error) {
    console.log(`Error occurred while connecting to DB : ${error}`);
  }
};

module.exports = connectToDB;
