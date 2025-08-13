"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-white">
            Creator
          </span>
          <span className="sr-only">Go to homepage</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-[18px] text-slate-300 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/creator"
            className="text-[18px] text-slate-300 hover:text-white"
          >
            Creator Ai
          </Link>
          <Link
            href="/faq"
            className="text-[18px] text-slate-300 hover:text-white"
          >
            FAQ
          </Link>
          <Link
            href="/privacy"
            className="text-[18px] text-slate-300 hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-1 text-[18px] text-slate-300 hover:text-white"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-md border border-blue-500/60 bg-transparent px-5 text-blue-400 hover:bg-blue-500 hover:text-white"
          >
            <Link href="/login">Login</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/70 md:hidden">
          <div className="container mx-auto grid gap-2 px-4 py-3">
            <Link href="/" className="py-1 text-sm text-slate-200">
              Home
            </Link>
            <Link href="/creator" className="py-1 text-sm text-slate-200">
              Creator Ai
            </Link>
            <Link href="/faq" className="py-1 text-sm text-slate-200">
              FAQ
            </Link>
            <Link href="/privacy" className="py-1 text-sm text-slate-200">
              Privacy
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-1 py-1 text-sm text-slate-200"
            >
              <ShoppingCart className="h-4 w-4" />
              Cart
            </Link>
            <Button
              asChild
              className="mt-2 w-full rounded-md border border-blue-500/60 bg-transparent text-blue-400 hover:bg-blue-500 hover:text-white"
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
