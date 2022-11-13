import connection from "../db";

export async function getUsersFromHospital(req, res){
    const hospitalToken = req.params.hospitalToken;
    // Adicionar filtro on-chain aqui

    const tokenList = [] // vai vir do filtro on chain
    if (tokenList.length == 0){
        return []
    }
        
    const strList = "("


    const queryStr = "SELECT * FROM usuarios WHERE ID IN "
    const users = connection.query(queryStr)

}