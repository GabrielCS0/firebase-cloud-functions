import * as functions from "firebase-functions";
import "express-async-errors";
import * as express from "express";
import {router} from "./routes";

const app = express();

app.use(router);

app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _: express.NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});


exports.app = functions.https.onRequest(app);
