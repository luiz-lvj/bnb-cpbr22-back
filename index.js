import "./src/setup"; // deve ser o primeiro import

import connection from "./src/db";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

export async function init () {
    await connectDatabase();
}

const port = +process.env.PORT || 4000;

init().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
});