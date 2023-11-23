import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnectd) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnectd = db.connections[0].readyState;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};
