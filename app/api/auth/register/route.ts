import { NextResponse } from "next/server"

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function POST(req: Request) {
  const body = await req.json()
  await wait(700)
  if (!body?.email) return NextResponse.json({ message: "Invalid" }, { status: 400 })
  return NextResponse.json({ message: "Created", email: body.email })
}
