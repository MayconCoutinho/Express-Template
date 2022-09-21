import { Request, Response } from "express"
import insertCadastro from "../data/criarCadastro"
import { Cadastro } from "../types/types"


export const postCadastro = async (req: Request, res: Response) => {
    try {
        const {nome, email} = req.body
        const cadastro: Cadastro = {
            id: Date.now().toString(),
            nome,
            email
        }
        await insertCadastro(cadastro)
        res.status(200).send("Cadastro adicionado com sucesso com sucesso")
    } catch (error: any) {
        res.status(500).send(error.message)        
    }
}