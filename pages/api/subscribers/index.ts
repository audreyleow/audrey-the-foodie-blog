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
          throw new Error();
        }

        const subscriber = await Subscriber.create({ email: req.body.email });
        res.status(201).json({ success: true, data: subscriber });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
