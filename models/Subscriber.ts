import { Schema, model, models, Model } from "mongoose";

interface ISubscriber {
  email: string;
}

const subscriberSchema = new Schema<ISubscriber>(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default (models.Subscriber ||
  model("Subscriber", subscriberSchema)) as Model<ISubscriber, {}, {}, {}, any>;
