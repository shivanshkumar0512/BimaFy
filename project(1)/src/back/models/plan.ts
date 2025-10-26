// src/models/Plan.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IPlan extends Document {
  name: string;
  price: number;
  duration: string;
}

const planSchema = new Schema<IPlan>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
});

const Plan = mongoose.model<IPlan>("Plan", planSchema);
export default Plan;