import { NextResponse } from "next/server";

// In-memory order storage (in production, use database)
let orders: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      items, 
      customerName, 
      email, 
      phone, 
      address, 
      city, 
      zipCode,
      paymentMethod = "cash"
    } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Cart is empty" }, 
        { status: 400 }
      );
    }

    if (!customerName || !email || !phone || !address) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" }, 
        { status: 400 }
      );
    }

    const totalAmount = items.reduce(
      (sum: number, item: any) => sum + (item.price * item.quantity), 
      0
    );

    const order = {
      id: `ORD-${Date.now()}`,
      items,
      customer: { customerName, email, phone, address, city, zipCode },
      totalAmount,
      paymentMethod,
      status: "pending",
      createdAt: new Date().toISOString()
    };

    orders.push(order);

    return NextResponse.json({ 
      success: true, 
      message: "Order placed successfully",
      orderId: order.id,
      data: order 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to process order" }, 
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ data: orders });
}
