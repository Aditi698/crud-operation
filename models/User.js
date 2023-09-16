import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNo: Number,
  password: String,
});

export default mongoose.model("User", userSchema);
