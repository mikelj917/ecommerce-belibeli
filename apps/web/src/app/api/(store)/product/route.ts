import { handleError } from "../../utils/handleError";
import { handleResponse } from "../../utils/handleResponse";
import { productService } from "./service";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const { products, count } = await productService.get(searchParams);

    return Response.json({ products, count });
  } catch (error) {
    const dataResponse = handleError(error);
    return handleResponse(dataResponse);
  }
}
