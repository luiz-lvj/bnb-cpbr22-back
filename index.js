import "./src/setup.js"; // deve ser o primeiro import
import "./src/chains.js"; // tem que ser rodado no início

import express from "express";
import cors from "cors";
import { getUsersFromHospital } from "./src/services/users.js";
import { loginHospital } from "./src/services/hospital.js";
import { getHash } from "./src/services/hash.js";
import { getHistoryForPacient } from "./src/services/history.js";
import { getConsultasFromBlockchain, postConsultaToBlockChain } from "./src/services/consulta.js";



const app = express();
app.use(cors());
app.use(express.json());

const port = +process.env.PORT || 4000;

app.get("/usuarios/:hospitalId", async (req, res) => await getUsersFromHospital(req, res));

app.get("/consultas/:pacienteToken", async (req, res) => await getConsultasFromBlockchain(req, res));
app.post("/consultas/:idConsulta/:idBlock", async (req, res) => postConsultaToBlockChain(req, res)) // coloca a consulta na blockchain

app.get("/exames/:pacienteToken", async (req, res) => await getConsultasFromBlockchain(req, res));
app.post("/exames/:idExame/:idBlock", async (req, res) => postConsultaToBlockChain(req, res)) // coloca a consulta na blockchain


app.get("/hospitais"); // body: name, token, username
app.post("/hospitais"); //body: name, username, token, password

app.post("/medicos"); // body: nome, especialidade, crm, token

app.post("/login/:usernameHospital/:password", async (req, res) => await loginHospital(req, res));

app.get("/historico/:pacienteToken", async (req, res) => await getHistoryForPacient(req, res));
app.get("/hash/:pass", async (req, res) => await getHash(req, res));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});