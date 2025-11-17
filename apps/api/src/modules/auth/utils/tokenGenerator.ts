import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

export const generateAccessToken = (userId: number, email: string) => {
  const accessToken = jwt.sign({ userId, email }, JWT_SECRET, {
    expiresIn: "15m",
  });
  return accessToken;
};

export const generateRefreshToken = (userId: number) => {
  const refreshToken = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });
  return refreshToken;
};
