import { NextResponse } from "next/server";
import { Pool } from "pg";

export const runtime = "nodejs";
const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 5 });

export async function POST(request: Request) {
  try {
    if (Number(request.headers.get("content-length")) > 10000) {
      return NextResponse.json({ error: "Request too large." }, { status: 413 });
    }
    const body = await request.json() as Record<string, unknown>;
    const clean = (key: string, max: number) => typeof body[key] === "string" ? (body[key] as string).trim().slice(0, max) : "";
    const name = clean("name", 100), phone = clean("phone", 20), email = clean("email", 150);
    const location = clean("location", 120), service = clean("service", 80), details = clean("details", 1500);
    const choices = new Set(["Interior design", "Civil & renovation", "Custom furniture", "False ceilings", "3D visualisation", "Not sure yet"]);
    if (!name || !/^[+\d()\s-]{8,20}$/.test(phone) || !location || !choices.has(service) ||
        (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
      return NextResponse.json({ error: "Please check the required details." }, { status: 400 });
    }
    await pool.query(
      "INSERT INTO inquiries (name, phone, email, location, service, details) VALUES ($1, $2, $3, $4, $5, $6)",
      [name, phone, email || null, location, service, details || null]
    );
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry save failed", error);
    return NextResponse.json({ error: "Unable to save enquiry." }, { status: 503 });
  }
}
