import { Router } from "express";
import { authValidation } from "../middlewares/authorization.middleware.js";
import urlsSchema from '../schemas/urls.schema.js';
import { validateSchema } from "../middlewares/schemaValidator.js";
import { deleteU, getUrl, openShort, shortenUrl } from "../controllers/urls.controller.js";

const router = Router();

router.post("/urls/shorten",validateSchema(urlsSchema) ,shortenUrl);
router.get("/urls/:id", getUrl);
router.get("/urls/open/:shortUrl", openShort);
router.delete("/urls/:id", authValidation, deleteU);

export default router;