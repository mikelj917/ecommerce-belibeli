import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedPaths = ["/cart", "/profile", "/wishlist"];

export async function guardFront(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cookieData = await cookies();
  const refreshToken = cookieData.get("refreshToken");
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  if (isProtected && !refreshToken) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
