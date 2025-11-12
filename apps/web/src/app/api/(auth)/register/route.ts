import { handleError } from "../../utils/handleError";
import { handleResponse } from "../../utils/handleResponse";
import { authService } from "../services";
import { authValidate } from "../validates";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const validatedData = authValidate.register(data);

    const user = authService.register(validatedData);

    return Response.json(user);
  } catch (error) {
    const dataResponse = handleError(error);
    return handleResponse(dataResponse);
  }
}
