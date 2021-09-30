import {Request, Response} from "express";
import {db} from "../config/firebase";

export class AddEntryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {title, text} = req.body;

    const entry = db.collection("entries").doc();

    const entryObject = {
      id: entry.id,
      title,
      text,
    };

    await entry.set(entryObject);

    return res.status(201).json({
      status: "success",
      message: "entry added successfully",
      data: entryObject,
    });
  }
}
