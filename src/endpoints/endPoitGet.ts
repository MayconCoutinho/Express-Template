import { Request, Response } from "express"
import selectAllDados from "../data/getDados"

export const getDados = async (req: Request, res: Response) => {
    try {
        const dados = await selectAllDados()
        res.status(200).send({ dados: dados })
    } catch (error: any) {
        res.status(500).send(error.message)        
    }
}