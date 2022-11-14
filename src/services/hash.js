import bcrypt from "bcrypt";


export async function getHash(req, res){
    const pass = req.params.pass;

    const ans = bcrypt.hashSync(pass, 10);

    return res.send(ans)
}