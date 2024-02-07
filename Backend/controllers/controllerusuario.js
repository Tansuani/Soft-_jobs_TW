import { modelUsuario } from "../models/modelusuario.js"
import { getDatabaseError } from "../lib/errors/database.error.js"
import "dotenv/config"
import bcript from "bcryptjs"
import jwt from "jsonwebtoken"

const expresion_regular_roles = /^(Full Stack Developer|Frontend Developer|Backend Developer)$/
const expresion_regular_lenguajes = /^(JavaScript|Python|Ruby)$/


const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await modelUsuario.findOneEmail(email)
        if (!user)
            return res.status(400).json({ message: "User not found" })

        const isMatch = bcript.compareSync(password, user.password)
        if (!isMatch)
            return res.status(400).json({ message: "Invalid credentials" })

        // creación del payload
        const payload = {
            email,
            user_id: user.id,
        }
        // creación del token
        const token = jwt.sign(payload, process.env.JWT_SECRET)
        return res.status(200).json({
            message: "Login successfully",
            token,
            email,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}


const register = async (req, res) => {
    const { email, password, rol, lenguage } = req.body

    if (!expresion_regular_roles.test(rol))
        return res.status(400).json({ message: "Invalid rol, string" })

    if (!expresion_regular_lenguajes.test(lenguage))
        return res.status(400).json({ message: "Invalid lenguaje, string" })

    try {
        await modelUsuario.create({
            email,
            password: bcript.hashSync(password, 10),
            rol,
            lenguage,
        })

        return res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        console.log(error)

        if (error.code === "23505")
            return res.status(400).json({ message: "User already exists" })


        return res.status(500).json({ message: "Internal server error" })
    }
}

const readByEmail = async (req, res) => {
    try {
        const usuario = await modelUsuario.findOneEmail(req.user.email)

        if (!usuario)
            res.status(404).json({ message: "Usuario not found" })
        const array = [usuario]
        res.json(array)
    } catch (error) {
        console.log(error)
        if (error.code) {
            const { code, message } = getDatabaseError(error.code)
            return res.status(code).json({ message })
        }
        return res.status(500).json({ message: "Internal server error" })
    }
}


export const controllerUsuario = {
    login,
    register,
    readByEmail,
}