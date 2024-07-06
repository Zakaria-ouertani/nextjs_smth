"use server"
import connectToDB from "@/lib/connectToDB";
import AIModel from "@/models/AIModel.model";
import mongoose from "mongoose";

export async function fetchAIModels() {
  try {
    connectToDB();
    return await AIModel.find();
  } catch (error: any) {
      throw new Error("Failed to fetch AI Models.");
  }
}

export async function addAIModel(
  name: String,
  description: String,
  type: String,
  provider: String,
  version: String,
  createdAt: Date,
  updatedAt: Date
) {
  try {
    connectToDB();
    const newAIModel = await AIModel.create(
      {
        name,
        description,
        type,
        provider,
        version,
        createdAt,
        updatedAt
      }
    );
  } catch (error: any) {
      throw new Error("Failed to add AI Model.");
  }
}

export async function removeAIModel(modelId: mongoose.Types.ObjectId ) {
  try {
    connectToDB();
    AIModel.findByIdAndDelete(modelId);
  } catch(error: any) {
    throw new Error("Failed to delete AI Model.");
  }
  
}
