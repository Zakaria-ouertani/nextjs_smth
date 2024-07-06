import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  createdAt: Date,
  updatedAt: Date
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User
