"use server"
import connectToDB from "@/lib/connectToDB";
import PaymentPlansModel from "@/models/PaymenPlans.model";

export async function fetchPlans() {
  await connectToDB();
  try {
      return await PaymentPlansModel.find({});
  } catch (error: any) {
      throw new Error("Failed to fetch Plans.");
  }
}

export async function fetchSpecificPlan(title: string) {
  await connectToDB();
  try {
      return await PaymentPlansModel.findOne({title: title});
  } catch (error: any) {
      throw new Error("Failed to fetch Plan \"" + title + "\"");
  }
}
export async function addPlan(
  title: String,
  description: String,
  price: Number,
  features: Object
) {
  await connectToDB();
  const newPlan = await PaymentPlansModel.create(
    {
       title: title,
       description: description,
       price: price,
       features: features
    }
  )
}
