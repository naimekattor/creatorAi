"use client";

import type React from "react";

import AuthShell from "@/components/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/use-redux";
import { resetPassword } from "@/lib/auth-slice";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ResetPasswordPage() {
  const dispatch = useAppDispatch();
  const { pendingEmail } = useAppSelector((s) => s.auth);
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) return alert("Passwords do not match");
    await dispatch(
      resetPassword({ email: pendingEmail || "demo@mail.com", password })
    );
    router.push("/password-changed-success");
  };

  return (
    <AuthShell title="Change Password">
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm">Confirm Password</Label>
          <Input
            id="confirm"
            type="password"
            placeholder="Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Submit
        </Button>
        <div className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="rounded border border-blue-200 px-2 py-1 text-blue-600 hover:bg-blue-50"
          >
            Login
          </Link>
        </div>
        <Button
          type="button"
          variant="outline"
          className="w-full justify-center gap-2 bg-transparent"
        >
          <Image
            width={16}
            height={16}
            src="/icons/google.png"
            alt="google logo"
            className="h-4 w-4"
          />
          Sign Up with Google
        </Button>
      </form>
    </AuthShell>
  );
}
