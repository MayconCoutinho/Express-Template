import connection from "./connection"

export default async function insertDados(dados: any) {
    const {id, nome,  idade} = dados    
    await connection(`tabela_teste`).insert({
        id,
        nome,
        idade       
    })
}

