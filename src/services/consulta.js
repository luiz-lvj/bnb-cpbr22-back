import { lms1, accounts1, lms2, accounts2 } from "../chains.js";


export async function postConsultaToBlockChain(req, res){
    const idConsulta = req.params.idConsulta;
    const idBlock = req.params.idBlock;

    const lms = idBlock == "1" ? lms1 : lms2 ;
    const accounts = idBlock == "1" ? accounts1 : accounts2;

    const area = req.body.area;
    const especificacao = req.body.especificacao;
    const medico = req.body.medicoAddress;
    const paciente = req.body.pacienteAddress;
    const epochTime = parseInt(Date.now()/1000);
    const laudo = req.body.laudo;

    try{
        lms.postConsulta(parseInt(idConsulta), area, especificacao, medico, paciente, epochTime, laudo, {from: accounts[0]})
        .then(() => {
            console.log("Consulta na blockchain!");
            return res.sendStatus(200);
        })
        .catch(err => {
            console.log(err);
            return res.sendStatus(500);
        })
    } catch(err){
        console.log(err);
        return res.sendStatus(500);
    }

}

export async function getConsultasFromBlockchain(req, res){
    const pacienteAddress = req.params.pacienteToken;
    try{
        const consultas = await lms1.getConsultasPaciente(pacienteAddress);
        return res.send(consultas);
    } catch (err){
        console.log(err);
        return res.sendStatus(500);
    }
}