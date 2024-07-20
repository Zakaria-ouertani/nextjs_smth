import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true},
  name: { type: String, required: true},
  email: { type: String, required: true},
  createdAt: { type: Date },
  updatedAt: { type: Date },
  payment_plan: { type: Number, default: 'free' }
});

export default  mongoose.models.User || mongoose.model('User', UserSchema);
