import { controllerUsuario } from "../controllers/controllerusuario.js"
import { authMiddleware } from "../middlewares/auth.js";
import { Router } from "express"

const routerUsuario = Router()


routerUsuario.post("/usuarios", controllerUsuario.register)
routerUsuario.get("/usuarios", authMiddleware, controllerUsuario.readByEmail)
routerUsuario.post("/login", controllerUsuario.login)
routerUsuario.get("*", (req, res) => {
    res.status(404).send("Esta ruta no existe")
})

export default routerUsuario