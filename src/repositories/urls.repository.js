import { db } from '../database/database.connection.js'

export function createShortUrlDB(url, shortUrl, userId) {
    return db.query(
        `INSERT INTO urls ("original", "short", "IdUser") 
            VALUES ($1, $2, $3) 
            RETURNING id, "short"`,
        [url, shortUrl, userId]
    )
}

export function getUrlByIdDB(id) {
    return db.query(`SELECT id, "original", "short" FROM urls WHERE id=$1;`, [id])
}

export function getUrlUserById(id) {
    return db.query(`SELECT "IdUser" FROM urls WHERE id=$1;`, [id])
}

export function getUrlByNameDB(shortUrl) {
    return db.query(`SELECT "original" FROM urls WHERE "short"=$1;`, [shortUrl])
}

export function increaseViewsDB(shortUrl) {

    return db.query(
        `UPDATE urls SET "Count" = "Count" + 1 WHERE "short"=$1;`,
        [shortUrl]
    )
}

export function deleteUrlDB(id) {
    return db.query(`DELETE FROM urls WHERE id=$1;`, [id])
}