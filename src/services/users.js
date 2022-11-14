import connection from "../db.js";
import { lms1, accounts1, lms2, accounts2 } from "../chains.js";


export async function getUsersFromHospital(req, res){
    const hospitalId = req.params.hospitalId;
    // Adicionar filtro on-chain aqui

    const lms = hospitalId == "1" ? lms1 : lms2 ;
    const accounts = hospitalId == "1" ? accounts1 : accounts2;

    const tokenList = await lms.getPacientes();
    console.log(tokenList) // filtro no blockchain
    if (tokenList.length == 0){
        return res.send([]);
    }
        
    let strList = "(" + "'" + tokenList[0] + "'";
    for(let i = 1; i< tokenList.length; i++){
        strList += ", " + "'" + tokenList[i]+ "'";
    }

    strList += ");"
    //const queryStr = "SELECT * FROM usuarios WHERE public_key IN " + strList; //com filtro on-chain
    const queryStr = "SELECT * FROM usuarios" // sem filtro on-chain
    try{
        const users = await connection.query(queryStr);
        console.log(users.rows);
        return res.send(users.rows);
    } catch(err){
        console.log(err);
        return res.sendStatus(404);
    }
}