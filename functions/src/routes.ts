import {Router} from "express";
import {AddEntryController} from "./controllers/AddEntryController";
import {DeleteEntryController} from "./controllers/DeleteEntryController";
import {GetAllEntriesController} from "./controllers/GetAllEntriesController";
import {UpdateEntryController} from "./controllers/UpdateEntryController";

const router = Router();

const addEntryController = new AddEntryController();
const getAllEntriesController = new GetAllEntriesController();
const updateEntryController = new UpdateEntryController();
const deleteEntryController = new DeleteEntryController();

router.post("/entry", addEntryController.handle);
router.get("/entry", getAllEntriesController.handle);
router.put("/entry/:entryId", updateEntryController.handle);
router.delete("/entry/:entryId", deleteEntryController.handle);

export {router};
