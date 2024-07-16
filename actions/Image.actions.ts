"use server"
import connectToDB from "@/lib/connectToDB";
import Image from "@/models/Image.model"
import mongoose from "mongoose"

export async function fetchImages(userId: String) {
  try {
    await connectToDB();
    return await Image.find({user: userId});
  } catch (error: any) {
      throw new Error("Failed to fetch Images.");
  }
}

export async function addImage(
  url: String,
  user: String,
  createdAt: Date,
  updatedAt: Date
) {
  try {
    await connectToDB();
    await Image.create(
      {
        url,
        user,
        createdAt,
        updatedAt
      }
    );
  } catch (error: any) {
      throw new Error("Failed to add Image.");
  }
}

export async function removeImage(imageId: mongoose.Types.ObjectId) {
  try {
    await connectToDB();
    Image.findByIdAndDelete(imageId);
  } catch(error: any) {
    throw new Error("Failed to delete Image.");
  }
  
}
