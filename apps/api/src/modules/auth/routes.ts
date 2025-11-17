import { login, refresh, register } from "@/modules/auth/controller.js";
import { Router } from "express";

const authRouter: Router = Router();

authRouter.post("/auth/register", register);
authRouter.post("/auth/login", login);
authRouter.post("/auth/refresh", refresh);

export { authRouter };
