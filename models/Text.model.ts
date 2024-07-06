import mongoose from "mongoose"
const TextSchema = new mongoose.Schema({
  content: String,
  user: String,
  createdAt: Date,
  updatedAt: Date
});

export default  mongoose.models.Text || mongoose.model('Text', TextSchema);
