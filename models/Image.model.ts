import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  url: String,
  user: String,
  createdAt: Date,
  updatedAt: Date
});

const Image = mongoose.models.Image || mongoose.model('Image', ImageSchema);

export default Image
