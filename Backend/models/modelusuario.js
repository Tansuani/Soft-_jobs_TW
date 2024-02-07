import "dotenv/config";
import format from "pg-format";
import { pool } from "../database/connection.js";


const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.DOMAIN_URL_APP
    : `http://localhost::${process.env.PORT}`

const findOneEmail = async (email) => {
  const query = "SELECT * FROM usuarios WHERE email = $1"
  const { rows } = await pool.query(query, [email])
  return rows[0]
}

const create = async ({ email, password, rol, lenguage }) => {

  const query = "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *"
  const { rows } = await pool.query(query, [
    email,
    password,
    rol,
    lenguage,
  ])
  return rows[0]
}



export const modelUsuario = {
  findOneEmail,
  create,
}