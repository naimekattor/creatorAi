import AuthShell from "@/components/auth-shell"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function AccountCreatedSuccess() {
  return (
    <AuthShell>
      <div className="mx-auto max-w-sm rounded-xl border border-slate-200 bg-white p-6 text-center shadow-md">
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <p className="text-sm text-slate-800">Account has been created</p>
        <p className="text-sm text-slate-800">Successfully</p>
        <Button asChild className="mt-5 rounded-full bg-blue-600 px-5">
          <Link href="/login">Back To login</Link>
        </Button>
      </div>
    </AuthShell>
  )
}
