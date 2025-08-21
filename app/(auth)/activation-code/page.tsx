"use client";

import AuthShell from "@/components/auth-shell";
import OtpInput from "@/components/otp-input";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/use-redux";
import { verifyCode } from "@/lib/auth-slice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
export default function ActivationCodePage() {
  const dispatch = useAppDispatch();
  const { pendingEmail, isLoading, error } = useAppSelector((s) => s.auth);
  const router = useRouter();
  const [codeValue, setCodeValue] = useState("");

  const onConfirm = async () => {
    if (!pendingEmail || !codeValue) {
      console.error("Email or code is missing.");
      return;
    }

    const result = await dispatch(
      verifyCode({ email: pendingEmail, code: codeValue })
    );

    //  redirect on success
    if (verifyCode.fulfilled.match(result)) {
      router.push("/password-changed-success");
    }
  };

  return (
    <AuthShell title="Activation Code">
      <div className="mx-auto max-w-sm space-y-6 text-center">
        <span className="font-bold text-black text-[18px]">
          We have sent you an activation code.
        </span>
        <p className="text-sm text-slate-600">
          An email has been sent to{" "}
          <span className="font-medium">{pendingEmail}</span> containing a code.
        </p>
        <div>
          <p className="mb-3 text-sm font-medium text-slate-800">
            Enter verification code
          </p>
          <OtpInput length={4} onComplete={setCodeValue} />
          <div className="mt-4 text-xs font-semibold text-black">
            if you didn{"'"}t receive a code?{" "}
            <Link
              href="/confirm-email"
              className="text-blue-600 hover:underline"
            >
              click here to resend.
            </Link>
          </div>
        </div>

        {error && <p className="text-sm font-semibold text-red-600">{error}</p>}

        <Button
          onClick={onConfirm}
          disabled={isLoading || codeValue.length < 4}
          className="w-full font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          {isLoading ? "Verifying..." : "Confirm"}
        </Button>
      </div>
    </AuthShell>
  );
}
