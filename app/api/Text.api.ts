"use server"
import connectToDB from "@/lib/connectToDB";
import Image from "@/models/Text.model"
import mongoose from "mongoose"

export async function fetchImages(userId: String) {
  try {
    connectToDB();
    return await Image.find({user: userId});
  } catch (error: any) {
      throw new Error("Failed to fetch Text.");
  }
}

export async function addAIModel(
  content: String,
  user: String,
  createdAt: Date,
  updatedAt: Date
) {
  try {
    connectToDB();
    const newText = await Image.create(
      {
        content,
        user,
        createdAt,
        updatedAt
      }
    );
  } catch (error: any) {
      throw new Error("Failed to add Text.");
  }
}

export async function removeAIModel(textId: mongoose.Types.ObjectId) {
  try {
    connectToDB();
    Image.findByIdAndDelete(textId);
  } catch(error: any) {
    throw new Error("Failed to delete Text.");
  }
  
}
