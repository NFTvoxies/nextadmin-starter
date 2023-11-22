import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};

  try {
    if (connection.isConnectd) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnectd = db.connections[0].readyState;
  } catch (e) {
    throw new Error(e);
  }
};
