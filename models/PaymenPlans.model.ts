import mongoose from "mongoose";

const PaymentPlanSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  features: { type: Object }
});

export default  mongoose.models.Payment || mongoose.model('Payment', PaymentPlanSchema);
