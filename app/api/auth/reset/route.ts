import { NextResponse } from "next/server"

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function POST(req: Request) {
  const { password } = await req.json()
  await wait(500)
  if (!password) return NextResponse.json({ message: "Password required" }, { status: 400 })
  return NextResponse.json({ message: "Password updated" })
}
