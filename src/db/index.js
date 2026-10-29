// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//     console.log("MongoDB error:", error.message);
//     process.exit(1);
// }
// }

// export default connectDB

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    console.log("1. Starting MongoDB connection...");
    console.log("2. DB_NAME:", DB_NAME);
    console.log("3. MONGODB_URI exists:", Boolean(process.env.MONGODB_URI));

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
      { serverSelectionTimeoutMS: 10000 }
    );

    console.log(
      "MongoDB connected !! DB HOST:",
      connectionInstance.connection.host
    );

    return connectionInstance;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
