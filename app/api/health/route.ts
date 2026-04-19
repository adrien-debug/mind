import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ ok: true, app: "MIND" });
  } catch (error) {
    console.error("[api/health] unexpected error", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
