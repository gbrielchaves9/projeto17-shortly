import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'
import { createUserDB, getUserByEmailDB } from '../repositories/user.repository.js'
import { createSessionDB } from '../repositories/auth.repository.js'

export async function signIn(req, res) {
  const { email, password } = req.body;

  try {
    const { rows: users } = await getUserByEmailDB(email);
    if (users.length === 0) {
      return res.status(401).send({ message: "Email not registered!" });
    }

    const [user] = users;
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).send({ message: "Incorrect password!" });
    }

    const token = uuid();
    await createSessionDB(user.id, token);

    res.send({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
}


export async function signUp(req, res) {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const users = await getUserByEmailDB(email);
    if (users.length > 0) {
      return res.status(409).send({ message: "Email already in use" });
    }

    if (password !== confirmPassword) {
      return res.status(400).send({ message: "Passwords do not match" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const { rows } = await createUserDB(name, email, hashedPassword);
    const [newUser] = rows;

    res.status(201).send({ message: "User created successfully", userId: newUser.id });
  } catch (err) {
    res.status(500).send(err.message);
  }
}
