import dbConnect from "../../../mongo/dbConnect";
import offertsModel from "../../../mongo/models/offerts.model";

export default async function handler(req, res) {
  const { method, body } = req;

  await dbConnect();
  switch (method) {
    case "POST":
      try {
        const Offerts = await offertsModel.create(
          body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: Offerts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
