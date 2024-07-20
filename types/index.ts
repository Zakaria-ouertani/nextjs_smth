import { ObjectId } from "mongoose";

export interface ImageProps {
  _id: ObjectId;
  user: String;
  url: String;
  createdAt: Date;
  updatedAt: Date;
}

export interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];

}
