import { NextResponse } from "next/server"

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function POST(req: Request) {
  const { code } = await req.json()
  await wait(400)
  if (!code || String(code).length < 4) {
    return NextResponse.json({ message: "Invalid code" }, { status: 400 })
  }
  return NextResponse.json({ message: "Verified" })
}
