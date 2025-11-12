import type { NextRequest } from "next/server";
import { guardFront } from "./proxy/guardFront";
import { guardApi } from "./proxy/guardAPI";

export const config = {
  matcher: ["/api/:path*", "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isApiRouter = pathname.startsWith("/api");

  if (!isApiRouter) {
    const response = await guardFront(req);
    return response;
  }

  if (isApiRouter) {
    const response = await guardApi(req);
    return response;
  }
}
