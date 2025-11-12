import { HttpError } from "../HttpErrors";

export const handleError = (error: unknown) => {
  if (error instanceof HttpError) {
    const { message, details, status } = error;
    return { message, details, status };
  }

  return { message: "Erro interno do servidor", details: null, status: 500 };
};
