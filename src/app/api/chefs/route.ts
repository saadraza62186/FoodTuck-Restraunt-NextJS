import chefs from "@/data/chefs.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: chefs });
}
