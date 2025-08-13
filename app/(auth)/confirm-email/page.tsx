"use client"

import type React from "react"

import AuthShell from "@/components/auth-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/lib/use-redux"
import { forgotPassword, setPendingEmail } from "@/lib/auth-slice"

export default function ConfirmEmailPage() {
  const [email, setEmail] = useState("")
  const router = useRouter()
  const dispatch = useAppDispatch()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await dispatch(forgotPassword({ email }))
    dispatch(setPendingEmail(email))
    router.push("/activation-code")
  }

  return (
    <AuthShell title="Confirm Email" subtitle="Empowering hotels and restaurants">
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="user@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full rounded-md bg-blue-600 text-white hover:bg-blue-700">
          Confirm
        </Button>
      </form>
    </AuthShell>
  )
}
