import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function POST(req: Request) {
  try {
    const { name, role, email } = await req.json();

    if (!name || !role || !email) {
      return NextResponse.json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create table if it doesn't exist - chatgpt
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Insert new record - chatGpt
    await sql`
      INSERT INTO waitlist (name, role, email)
      VALUES (${name}, ${role}, ${email})
      ON CONFLICT (email) DO NOTHING;
    `;

    return NextResponse.json({
      success: true,
      message: "User added to waitlist ✅",
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message || "Something went wrong",
    });
  }
}
