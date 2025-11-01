import foods from "@/data/foods.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: foods });
}
