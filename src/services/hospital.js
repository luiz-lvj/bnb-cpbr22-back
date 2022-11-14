import connection from "../db.js";
import bcrypt from "bcrypt"


export async function loginHospital(req, res) {
    const userName =  req.params.usernameHospital;
    const password = req.params.password;
    try{
        const user = await connection.query(`SELECT 
                                            id, nome, public_key, username, password
                                            from hospitais
                                            WHERE username=$1`,[userName]);
        if(bcrypt.compareSync(password, user.rows[0].password)){
            const ans = {
                id: user.rows[0].id,
                nome: user.rows[0].nome,
                public_key: user.rows[0].public_key,
                username: user.rows[0].username,
            }
            return res.send(ans);
        }
        return res.sendStatus(404);
    } catch(err){
        console.log(err);
        return res.sendStatus(500)
    }
}