import * as functions from "firebase-functions";
import * as express from "express";

const app = express();

app.get("/", (_, res) => res.json({message: "Success"}));

exports.app = functions.https.onRequest(app);
