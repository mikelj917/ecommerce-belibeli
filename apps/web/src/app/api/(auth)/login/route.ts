import { HttpError } from "../../HttpErrors";
import { cookies } from "next/headers";
import { authValidate } from "../validates";
import { authService } from "../services";
import { handleError } from "../../utils/handleError";
import { handleResponse } from "../../utils/handleResponse";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const validatedData = authValidate.login(data);

    const { user, accessToken } = await authService.login(validatedData);

    const cookieAuth = await cookies();

    cookieAuth.set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return Response.json(user);
  } catch (error) {
    const dataResponse = handleError(error);
    return handleResponse(dataResponse)
  }
}
