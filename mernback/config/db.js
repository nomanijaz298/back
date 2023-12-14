import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Data base connected successfully ${conn.connection.host}`.bgGreen
    );
  } catch (error) {
    console.log(`Error in DataBase connection ${error}`.bgRed);
  }
};

export default connectDB;
