import type { Response } from "express";

type HandleResponse = {
  message: string;
  details: unknown;
  status: number;
};

export const handleResponse = (res: Response, { details, message, status }: HandleResponse) => {
  return res.status(status).json({ message, details });
};
