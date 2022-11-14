import { lms1, accounts1, lms2, accounts2 } from "../chains.js";


export async function postExameToBlockChain(req, res){
    const idExame = req.params.idExame;
    const idBlock = req.params.idBlock;

    const lms = idBlock == "1" ? lms1 : lms2 ;
    const accounts = idBlock == "1" ? accounts1 : accounts2;

    const nome = req.body.nome;
    const paciente = req.body.pacienteAddress;
    const epochTime = parseInt(Date.now()/1000);
    const laudo = req.body.laudo;
    const consulta = parteInt(req.body.consulta)

    try{
        lms.postExame(parseInt(idExame), nome, paciente, laudo, epochTime, consulta, {from: accounts[0]})
        .then(() => {
            console.log("Exame na blockchain!");
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

export async function getExamesFromBlockchain(req, res){
    const pacienteAddress = req.params.pacienteToken;
    try{
        const exames = await lms1.getConsultasPaciente(pacienteAddress);
        return res.send(exames);
    } catch (err){
        console.log(err);
        return res.sendStatus(500);
    }
}