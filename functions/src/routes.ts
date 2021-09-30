import {Router} from "express";
import {AddEntryController} from "./controllers/AddEntryController";
import {GetAllEntriesController} from "./controllers/GetAllEntriesController";

const router = Router();

const addEntryController = new AddEntryController();
const getAllEntriesController = new GetAllEntriesController();

router.post("/entry", addEntryController.handle);
router.get("/entry", getAllEntriesController.handle);

export {router};
