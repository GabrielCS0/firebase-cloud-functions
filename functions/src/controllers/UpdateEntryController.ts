import {Request, Response} from "express";
import {db} from "../config/firebase";

export class UpdateEntryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {body: {title, text}, params: {entryId}} = req;

    const entry = db.collection("entries").doc(entryId);
    const currentEntryData = (await entry.get()).data() || {};

    const entryObject = {
      id: entry.id,
      title: title || currentEntryData.title,
      text: text || currentEntryData.text,
    };

    await entry.set(entryObject).catch((err) => {
      throw new Error(err.message);
    });

    return res.json({
      status: "success",
      message: "entry updated successfully",
      data: entryObject,
    });
  }
}
