import blogs from "@/data/blogs.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: blogs });
}
