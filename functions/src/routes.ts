import {Router} from "express";
import {AddEntryController} from "./controllers/AddEntryController";

const router = Router();

const addEntryController = new AddEntryController();

router.post("/entry", addEntryController.handle);

export {router};
