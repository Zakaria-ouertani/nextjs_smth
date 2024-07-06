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

export default  mongoose.models.AIModel || mongoose.model('AIModel', AIModelSchema);
