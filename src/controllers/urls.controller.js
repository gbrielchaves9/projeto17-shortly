import { db } from '../database/database.connection.js'

export async function shortenUrl(req, res) {
    const { url } = req.body;
    
    // você precisa implementar a lógica para gerar shortUrl
    const shortUrl = // lógica para gerar shortUrl aqui

    await db.query('INSERT INTO urls (original, short) VALUES ($1, $2)', [url, shortUrl]);

    res.json({ shortUrl });
}

export async function getUrl(req, res) {
    const { id } = req.params;

    const result = await db.query('SELECT * FROM urls WHERE id = $1', [id]);
    const url = result.rows[0];

    if (!url) {
        return res.status(404).json({ error: 'URL not found' });
    }

    res.json({ url: url.original });
}

export async function openShort(req, res) {
    const { shortUrl } = req.params;

    const result = await db.query('SELECT * FROM urls WHERE short = $1', [shortUrl]);
    const url = result.rows[0];

    if (!url) {
        return res.status(404).json({ error: 'URL not found' });
    }

    res.redirect(url.original);
}

export async function deleteU(req, res) {
    const { id } = req.params;

    const result = await db.query('DELETE FROM urls WHERE id = $1 RETURNING *', [id]);
    const deleted = result.rows[0];

    if (!deleted) {
        return res.status(404).json({ error: 'URL not found' });
    }

    res.json({ message: 'URL deleted successfully' });
}
