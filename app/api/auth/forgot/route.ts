import { NextResponse } from "next/server"

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function POST(req: Request) {
  const { email } = await req.json()
  await wait(500)
  if (!email) return NextResponse.json({ message: "Email required" }, { status: 400 })
  return NextResponse.json({ message: "Code sent", email })
}
