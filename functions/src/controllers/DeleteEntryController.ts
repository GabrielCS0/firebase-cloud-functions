import {Request, Response} from "express";
import {db} from "../config/firebase";

export class DeleteEntryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {entryId} = req.params;

    const entry = db.collection("entries").doc(entryId);

    const doc = await entry.get();
    if (!doc.exists) throw new Error("This entry does not exist.");

    await entry.delete().catch((err) => {
      throw new Error(err.message);
    });

    return res.json({
      status: "success",
      message: "entry deleted successfully",
    });
  }
}
