const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Connected to the database");
  } catch (error) {
    console.log("Cannot connect to the database!");
  }
};

module.exports = dbConnect;
