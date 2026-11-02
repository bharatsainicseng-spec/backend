import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

console.log("URI:", process.env.MONGO_URI);

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ Connected!");
  process.exit(0);
} catch (err) {
  console.error("❌", err);
  process.exit(1);
}

