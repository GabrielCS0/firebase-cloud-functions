import {Request, Response} from "express";
import {db} from "../config/firebase";

export class DeleteEntryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {entryId} = req.params;

    const entry = db.collection("entries").doc(entryId);

    await entry.delete().catch((err) => {
      throw new Error(err.message);
    });

    return res.json({
      status: "success",
      message: "entry deleted successfully",
    });
  }
}
