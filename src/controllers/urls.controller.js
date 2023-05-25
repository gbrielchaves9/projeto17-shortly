import { db } from '../database/database.connection.js'

import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdef', 8)

export async function shortenUrl(req, res) {
    const { url } = req.body;
    const userId = res.locals.user.id; 
    const shortUrl = nanoid();
  
    try {
        const { rows: [newUrl] } = await db.query('INSERT INTO urls (url, "shortUrl", "IdUser") VALUES ($1, $2, $3) RETURNING *', [url, shortUrl, userId]);
        res.status(201).json(newUrl);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to shorten the URL' });
    }
}

export async function getUrl(req, res) {
    const { id } = req.params;
    try {
        const { rows } = await db.query('SELECT * FROM urls WHERE id = $1', [id]);
        const [url] = rows;
        if (!url) {
            return res.status(404).json({ error: 'URL not found' });
        }
        res.json(url);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to get the URL' });
    }
}

export async function openShort(req, res) {
    const { shortUrl } = req.params;
    try {
        const { rows } = await db.query('SELECT * FROM urls WHERE "shortUrl" = $1', [shortUrl]);
        const [url] = rows;
        if (!url) {
            return res.status(404).json({ error: 'URL not found' });
        }
        await db.query('UPDATE urls SET "Count" = "Count" + 1 WHERE "shortUrl" = $1', [shortUrl]);
        res.redirect(url.url);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to open the URL' });
    }
}

export async function deleteU(req, res) {
    const { id } = req.params;
    const userId = res.locals.user.id; 
    try {
        const { rows } = await db.query('SELECT * FROM urls WHERE id = $1', [id]);
        const [url] = rows;
        if (!url) {
            return res.status(404).json({ error: 'URL not found' });
        }
        if (url.IdUser !== userId) {
            return res.status(403).json({ error: 'You can only delete URLs that you have created' });
        }
        await db.query('DELETE FROM urls WHERE id = $1', [id]);
        res.json({ message: 'URL deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to delete the URL' });
    }
}
