import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("Please define MONGODB_URI in .env.local");

let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
    .connect(MONGODB_URI, {
      dbName: "movieBlog",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((mongoose) => {
      console.log("✅ Connected to MongoDB");
      return mongoose;
    })
    .catch((error) => {
      console.error("❌ MongoDB connection error:", error);
      throw error;
    });
  }
  cached.conn = await cached.promise;
  global.mongoose = cached;
  return cached.conn;
}
