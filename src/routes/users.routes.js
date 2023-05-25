import { Router } from "express";
//import { authValidation } from "../middlewares/authorization.middleware.js";
import { getUser, getRanking } from "../controllers/users.controllers.js";

const router = Router();

router.get("/users/me", getUser);
router.get("/ranking", getRanking);

export default router;