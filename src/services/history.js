import { lms1, accounts1, lms2, accounts2 } from "../chains.js";

export async function getHistoryForPacient(req, res) {
    const tokenAddress = req.params.pacienteToken;
    try{
        lms1.getHistory(tokenAddress).then((_consultas, _exames ) => {
            const ans = {
                "consultas": _consultas,
                "exames": _exames
            }
            return res.send(ans);
        }).catch(err => {
            console.log(err);
            return res.sendStatus(500);
        })
    } catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}