import {Request, Response} from "express";
import {db} from "../config/firebase";

export class GetAllEntriesController {
  async handle(_: Request, res: Response): Promise<Response> {
    const allEntries: FirebaseFirestore.DocumentData[] = [];

    const querySnapshot = await db.collection("entries").get();
    querySnapshot.forEach((doc) => allEntries.push(doc.data()));

    return res.json(allEntries);
  }
}
