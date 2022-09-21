import connection from "./connection"

export default async function insertCadastro(cadastro: any) {
    const {id, nome, email} = cadastro    
    await connection.raw(`
    INSERT INTO cadastro(id,nome,email)
    VALUES ("${id}","${nome}","${email}");
`)
}