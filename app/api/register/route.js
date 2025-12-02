// app/api/register/route.js
import bcrypt from "bcrypt";
import { dbConnect } from "../../../lib/dbConnect";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: "All fields required" }), { status: 400 });
    }

    const users = await dbConnect("users");

    const existing = await users.findOne({ email });
    if (existing) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 409 });
    }

    const hashed = await bcrypt.hash(password, 10);
    const result = await users.insertOne({
      name,
      email,
      password: hashed,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "User registered", id: result.insertedId }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
