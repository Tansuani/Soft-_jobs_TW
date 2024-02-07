import "dotenv/config"
import express from "express"
import cors from "cors"

import routerUsuario from "./routes/routeusuario.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use("/", routerUsuario)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})