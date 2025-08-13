"use client"

import AuthShell from "@/components/auth-shell"
import OtpInput from "@/components/otp-input"
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from "@/lib/use-redux"
import { verifyCode } from "@/lib/auth-slice"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function ActivationCodePage() {
  const dispatch = useAppDispatch()
  const { pendingEmail } = useAppSelector((s) => s.auth)
  const router = useRouter()
  let codeValue = ""

  const onComplete = (c: string) => {
    codeValue = c
  }

  const onConfirm = async () => {
    const email = pendingEmail || "demo@mail.com"
    await dispatch(verifyCode({ email, code: codeValue || "0000" }))
    router.push("/password-changed-success")
  }

  return (
    <AuthShell title="Activation Code">
      <div className="mx-auto max-w-sm space-y-6 text-center">
        <p className="text-sm text-slate-600">
          We have sent you an activation code. An email has been sent to your address containing a code to reset your
          password.
        </p>
        <div>
          <p className="mb-3 text-sm font-medium text-slate-800">Enter verification code</p>
          <OtpInput length={4} onComplete={onComplete} />
          <div className="mt-4 text-xs text-slate-500">
            if you didn{"'"}t receive a code?{" "}
            <Link href="/confirm-email" className="text-blue-600 hover:underline">
              click here.
            </Link>
          </div>
        </div>
        <Button onClick={onConfirm} className="w-full rounded-md bg-blue-600 text-white hover:bg-blue-700">
          Confirm
        </Button>
      </div>
    </AuthShell>
  )
}
