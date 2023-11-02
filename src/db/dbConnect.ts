import mongoose from "mongoose";

let isConnected: boolean = false;

export const dbConnect = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    return;
  }

  const MONGO_URL = process.env.MONGO_URL;

  if (!MONGO_URL) {
    throw new Error("Please define MONGO_URL");
  }

  try {
    await mongoose.connect(MONGO_URL, { bufferCommands: false });

    isConnected = true;

    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
