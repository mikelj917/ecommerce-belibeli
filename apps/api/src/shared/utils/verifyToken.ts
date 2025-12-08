import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from "@/shared/utils/env";
import { UnauthorizedError } from "@/shared/utils/HttpErrors.js";
import jwt from "jsonwebtoken";

export async function verifyAccessToken(token: string = "") {
  if (!token) throw new UnauthorizedError("Token não fornecido.");

  const decoded = jwt.verify(token, JWT_ACCESS_SECRET);
  const { userId } = decoded as {
    userId: number;
  };

  return { userId };
}

export async function verifyRefreshToken(token: string = "") {
  if (!token) throw new UnauthorizedError("Token não fornecido.");

  const decoded = jwt.verify(token, JWT_REFRESH_SECRET);
  const { userId } = decoded as {
    userId: number;
  };

  return { userId };
}
