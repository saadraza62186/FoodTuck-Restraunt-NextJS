import { NextResponse } from "next/server";

// In-memory cart storage (in production, use database)
let cartItems: any[] = [];

export async function GET() {
  return NextResponse.json({ data: cartItems });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, name, price, image, quantity = 1 } = body;

    const existingItem = cartItems.find((item) => item.id === id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.push({ id, name, price, image, quantity });
    }

    return NextResponse.json({ success: true, data: cartItems });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id === "all") {
      cartItems = [];
    } else {
      cartItems = cartItems.filter((item) => item.id !== id);
    }

    return NextResponse.json({ success: true, data: cartItems });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
