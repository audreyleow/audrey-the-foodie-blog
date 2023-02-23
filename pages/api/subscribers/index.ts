import { NextApiRequest, NextApiResponse } from "next/types";
import dbConnect from "../../../lib/dbConnect";
import Subscriber from "../../../models/Subscriber";
import Isemail from "isemail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const isEmail = Isemail.validate(req.body.email);
        if (!isEmail) {
          return res
            .status(400)
            .json({ success: false, message: "Please enter a valid email address" });
        }

        const subscriber = await Subscriber.create({ email: req.body.email });
        res.status(201).json({ success: true, data: subscriber });
      } catch (error) {
        const message =
          error.code === 11000
            ? "Email is already in subscription list"
            : "Failed to subscribe, please try again";
        res.status(400).json({ success: false, message });
      }
      break;
    default:
      res.status(404).json({ success: false, message: "Not found" });
      break;
  }
}
