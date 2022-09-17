import { Request, Response } from "express"
import insertDados from "../data/postDados"
import { TesteType } from "../types/type"

export const addDados = async (req: Request, res: Response) => {
    try {
        const {nome,idade} = req.body
        const dadosTeste: TesteType = {
            id: Date.now().toString(),
            nome,
            idade 
        }
        await insertDados(dadosTeste)
        res.status(200).send("Tabela teste criada com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.message)        
    }
}