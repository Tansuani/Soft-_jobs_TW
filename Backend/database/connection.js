import pg from "pg"
import "dotenv/config"
const { Pool } = pg


export const pool = new Pool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    allowExitOnIdle: true,
});
