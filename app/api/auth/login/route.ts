import { NextResponse } from "next/server"

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function POST(req: Request) {
  const { email, password } = await req.json()
  await wait(600)
  if (!email || !password) {
    return NextResponse.json({ message: "Email and password required" }, { status: 400 })
  }
  // Demo success
  return NextResponse.json({
    user: { id: "u_123", email, firstName: "Creator", lastName: "User" },
    token: "demo_token_abc",
  })
}
