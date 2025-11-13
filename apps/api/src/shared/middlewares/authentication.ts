import type { RequestHandler } from "express";

export const authentication: RequestHandler = (req, res, next) => {
  next();
};

const name = "";
