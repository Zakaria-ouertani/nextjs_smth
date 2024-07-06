import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  user: { type: String, required: true},
  url: { type: String, required: true},
  createdAt: Date,
  updatedAt: Date
});

export default  mongoose.models.Image || mongoose.model('Image', ImageSchema);


