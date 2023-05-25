import bcrypt from 'bcrypt'
import { db } from '../database/database.connection.js'
import { v4 as uuid } from 'uuid'

export async function signIn(req, res) {
  const { email, password } = req.body;

  const { rows: users } = await db.query(
    `SELECT * FROM users WHERE email = $1 `,
    [email]
  );
  const [user] = users;
  if (!user) {
    return res.sendStatus(401);
  }

  if (bcrypt.compareSync(password, user.password)) {
    const token = uuid();
    await db.query(
      `
      INSERT INTO sessions (token, "userId") VALUES ($1, $2)`,
      [token, user.id]
    );
    return res.send({ token });
  }

  res.sendStatus(401);
}

export async function signUp(req, res) {
    const { name, email, password, confirmPassword } = req.body;

  
    const { rows: users } = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
    if (users.length > 0) {
        return res.status(400).json({ error: "Email already in use" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

 
    const hashedPassword = bcrypt.hashSync(password, 10);

    const { rows } = await db.query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id`,
      [name, email, hashedPassword]
    );

    const [newUser] = rows;

    res.json({ message: "User created successfully", userId: newUser.id });
}