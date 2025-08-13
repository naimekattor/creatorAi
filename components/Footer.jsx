import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-slate-950 text-slate-300">
      <div className="container mx-auto   gap-10 px-4 py-12 flex justify-between">
        <div className="space-y-3">
          <div className="text-lg font-semibold text-white">Creator. Ai</div>
          <address className="not-italic text-sm leading-6">
            Villa No. 45, Street 12, Khalifa City,
            <br />
            Abu Dhabi, United Arab Emirates
          </address>
          <p className="text-sm">Demo@Resuma.com</p>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-white">Get started</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Templates
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-white">Privacy Policy</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Security
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-white">Follow us on</div>
          <div className="flex gap-3">
            <Link
              aria-label="Facebook"
              href="#"
              className="rounded-md bg-slate-800 p-2 hover:bg-slate-700"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              aria-label="Twitter"
              href="#"
              className="rounded-md bg-slate-800 p-2 hover:bg-slate-700"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              aria-label="Instagram"
              href="#"
              className="rounded-md bg-slate-800 p-2 hover:bg-slate-700"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              aria-label="LinkedIn"
              href="#"
              className="rounded-md bg-slate-800 p-2 hover:bg-slate-700"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-slate-500">
          © 2025 Resuma. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
