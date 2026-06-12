const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying to connect...");

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected!");
    console.log(conn.connection.host);
  } catch (error) {
    console.error("FULL ERROR:");
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;