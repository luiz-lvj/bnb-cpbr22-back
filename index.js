import "./src/setup"; // deve ser o primeiro import

import connection from "./src/db";
import express from "express";
import cors from "cors";
import { getUsersFromHospital } from "./src/services_off_chain/users";


const app = express();
app.use(cors());
app.use(express.json());

const port = +process.env.PORT || 4000;

app.post("/usuarios")
app.get("/usuarios", async (req, res) => await getUsersFromHospital(req, res));
app.get("/consultas/:userToken");
app.get("/exames/:userToken");

app.get("/hospitais"); // body: 
app.post("/hospitais"); //body: name, token

app.post("/medicos"); // body: nome, especialidade, crm, token


app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});