import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true},
  name: { type: String, required: true},
  email: { type: String, required: true},
  createdAt: Date,
  updatedAt: Date
});

export default  mongoose.models.User || mongoose.model('User', UserSchema);
