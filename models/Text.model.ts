import mongoose from "mongoose"
const TextSchema = new mongoose.Schema({
  content: String,
  user: String,
  createdAt: Date,
  updatedAt: Date
});

const Text = mongoose.models.Text || mongoose.model('Text', TextSchema);
export default Text
