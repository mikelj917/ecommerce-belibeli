import { NextResponse, type NextRequest } from "next/server";
import { cartService } from "./service";

export async function GET(req: NextRequest) {
  try {
    const { cart, count, discount, subtotal, total } = await cartService.get(req);

    return NextResponse.json({ cart, count, subtotal, total, discount });
  } catch (error) {
    return NextResponse.json({ count: 0, items: [] });
  }
}
