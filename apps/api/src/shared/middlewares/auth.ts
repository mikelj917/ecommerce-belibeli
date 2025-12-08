import { verifyAccessToken } from "@/shared/utils/verifyToken.js";
import type { RequestHandler } from "express";

export const authMiddleware: RequestHandler = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) return res.status(401).json({ error: "Token não fornecido" });

  try {
    const { userId } = await verifyAccessToken(accessToken);
    res.locals.user = { userId };
    next();
  } catch {
    return res.status(401).json({ error: "Token inválido" });
  }
};
