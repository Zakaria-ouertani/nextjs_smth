import mongoose from "mongoose";

const AIModelSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: String,
  provider: String,
  version: String,
  createdAt: Date,
  updatedAt: Date
});
const AIModel = mongoose.models.AIModel || mongoose.model('AIModel', AIModelSchema);
export default AIModel
