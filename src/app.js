import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes/index.routes.js";

dotenv.config()

const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)

const PORT = process.env.PORT
server.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
