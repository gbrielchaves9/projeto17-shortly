import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import loginSchema from "../schemas/auth.shemas.js";
import userSchema from "../schemas/user.Shema.js";

const router = Router();

router.post("/signin", validateSchema(loginSchema), signIn);
router.post("/signup", validateSchema(userSchema), signUp);

export default router;
