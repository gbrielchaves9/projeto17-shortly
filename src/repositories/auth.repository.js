import { db } from '../database/database.connection.js'

export function createSessionDB(userId, token) {
    return db.query(
        `INSERT INTO sessions ("IdUser", token) VALUES ($1, $2);`,
        [userId, token]
    )
}

export function findSessionDB(token) {
    return db.query(`SELECT "IdUser" FROM sessions WHERE token=$1;`, [token])
}