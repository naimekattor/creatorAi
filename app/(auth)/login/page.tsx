"use client";

import type React from "react";

import AuthShell from "@/components/auth-shell";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/lib/use-redux";
import { login } from "@/lib/auth-slice";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((s) => s.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await dispatch(login({ email, password }));
    if ("payload" in res) {
      router.push("/");
    }
  };

  return (
    <AuthShell
      title="Login Account"
      subtitle="Empowering hotels and restaurants"
    >
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
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-xs text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <Button
          type="submit"
          className="w-full rounded-[0px] bg-blue-600 text-white text-[20px] hover:bg-blue-700"
        >
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Login
        </Button>
        <div className="text-center text-sm text-slate-600">
          Need an account?{" "}
          <Link
            href="/register"
            className="rounded border border-blue-200 px-2 py-1 text-blue-600 hover:bg-blue-50"
          >
            Sign Up
          </Link>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="
      relative flex items-center
       py-3 w-full
      
      bg-white text-[#757575]
      text-sm font-medium
      shadow-[0_-1px_0_rgba(0,0,0,0.04),0_1px_1px_rgba(0,0,0,0.25)]
      transition duration-300
      hover:shadow-[0_-1px_0_rgba(0,0,0,0.04),0_2px_4px_rgba(0,0,0,0.25)]
      active:bg-[#eeeeee]
      focus:outline-none focus:ring-2 focus:ring-[#c8dafc]
      disabled:grayscale disabled:bg-[#ebebeb] disabled:cursor-not-allowed justify-center
    "
          >
            <svg
              className="w-5 h-5 mr-3"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M17.6 9.2l-.1-1.8H9v3.4h4.8C13.6 12 13 13 12 13.6v2.2h3a8.8 8.8 0 0 0 2.6-6.6z"
                  fill="#4285F4"
                  fillRule="nonzero"
                />
                <path
                  d="M9 18c2.4 0 4.5-.8 6-2.2l-3-2.2a5.4 5.4 0 0 1-8-2.9H1V13a9 9 0 0 0 8 5z"
                  fill="#34A853"
                  fillRule="nonzero"
                />
                <path
                  d="M4 10.7a5.4 5.4 0 0 1 0-3.4V5H1a9 9 0 0 0 0 8l3-2.3z"
                  fill="#FBBC05"
                  fillRule="nonzero"
                />
                <path
                  d="M9 3.6c1.3 0 2.5.4 3.4 1.3L15 2.3A9 9 0 0 0 1 5l3 2.4a5.4 5.4 0 0 1 5-3.7z"
                  fill="#EA4335"
                  fillRule="nonzero"
                />
                <path d="M0 0h18v18H0z" />
              </g>
            </svg>
            Sign up with Google
          </button>
        </div>
      </form>
    </AuthShell>
  );
}
