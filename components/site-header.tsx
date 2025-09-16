"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white text-black backdrop-blur-xl">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[36px] font-semibold tracking-tight text-[#364056]">
            Creator
          </span>
          <span className="sr-only">Go to homepage</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-[18px]">
            Home
          </Link>
          <Link href="/creator" className="text-[18px]">
            Creator Ai
          </Link>
          <Link href="/faq" className="text-[18px]">
            FAQ
          </Link>
          <Link href="/privacy" className="text-[18px]">
            Privacy
          </Link>
          <Link href="/cart" className="flex items-center gap-1 text-[18px]">
            <ShoppingCart className="h-4 w-4" />
            Cart
          </Link>
        </nav>

        {/* Desktop Login */}
        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-md border border-[#1E90FF] bg-transparent px-5 text-[#1E90FF] hover:bg-blue-500 hover:text-white"
          >
            <Link href="/login">Login</Link>
          </Button>
        </div>

        {/* Mobile Right Section */}
        <div className="md:hidden flex items-center gap-4">
          <Link
            href="/cart"
            className="flex items-center gap-1 py-1 text-sm text-black"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart
          </Link>
          <button
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="border-t border-white/10 bg-black/70"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            const target = e.target as HTMLElement;
            const link = target.closest("a");
            if (link) {
              const href = link.getAttribute("href");
              console.log("click link href", href);
              setOpen(false);
            }
          }}
        >
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

            <Button
              asChild
              className="mt-2 w-full rounded-md border border-blue-500/60 bg-transparent text-blue-400 hover:bg-blue-500 hover:text-white"
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
