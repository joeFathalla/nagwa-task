import express from "express";
import cors from "cors";
import "dotenv/config";
import { corsOptions } from "./config/cors.js";
import wordsRouter from "./routers/words/index.js";
import rankRouter from "./routers/rank/index.js";

const port = process.env.PORT;
const app = express();
app.use(express.json()); //parse req.body to json
app.use(cors({ corsOptions }));
//setup routes
app.use("/words", wordsRouter);
app.use("/rank", rankRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
