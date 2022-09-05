import express,{ Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando na porta http://localhost:${address.port}`);
    } else {
        console.error(`Erro! Ao iniciar o servidor`);
    }
})

/// Precisa de ter tudo que esta em cima pra isso funcionar 

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})
