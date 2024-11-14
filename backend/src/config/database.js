const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.info("MongoDB Successfully Connected!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connect;
