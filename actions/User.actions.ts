"use server"
import connectToDB from "@/lib/connectToDB";
import User from "@/models/User.model"

export async function fetchUser(id: String | undefined) {
  return await User.findOne({id})
}

export async function addUser(
  id: String | undefined,
  name: String | null,
  email: String,
  createdAt: Date,
  updatedAt: Date
) {
  await connectToDB();
  const newUser = await User.create(
    {
       id,
       name,
       email,
       createdAt,
       updatedAt
    }
  )
}

export async function updateUser(
  id: String,
  name: String | null,
  email: String,
  createdAt: Date,
  updatedAt: Date
) {
  await connectToDB();
  const updatedUser = await User.findOneAndUpdate(
    { id },
    {
      name,
      email,
      createdAt,
      updatedAt,
    },
    { new: true }
  )
}

export async function deleteUser(id: String | undefined) {
  await connectToDB();
  const deletedUser = await User.findOneAndDelete({ id });
  if (!deletedUser) {
    throw new Error('User not found');
  }
}
