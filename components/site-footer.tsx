import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <footer
      className={`w-full ${
        isHome ? "bg-black text-[#f5f5f7]" : "bg-[#f5f5f7] text-black"
      } `}
    >
      <div className="bg-gradient-to-t from-black/30 to-transparent">
        <div className="container mx-auto   gap-10 px-4 py-12 flex justify-between md:flex-row flex-col">
          <div className="space-y-3">
            <div
              className={`text-lg font-semibold ${
                isHome ? "text-[#f5f5f7]" : ""
              }`}
            >
              Creator. Ai
            </div>
            <address className="not-italic text-sm leading-6 ">
              Villa No. 45, Street 12, Khalifa City,
              <br />
              Abu Dhabi, United Arab Emirates
            </address>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold ">Get started</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                {/* <Link href="#" className="hover:underline">
                  Reviews
                </Link> */}
              </li>
              {/* <li>
                <Link href="#" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Templates
                </Link>
              </li> */}
            </ul>
          </div>

          <div className="space-y-3">
            <Link href={"/privacy"} className="text-sm font-semibold ">
              Privacy Policy
            </Link>
            {/* <ul className="space-y-2 text-sm">
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
            </ul> */}
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold ">Follow us on</div>
            <div className="flex gap-3">
              <Link
                aria-label="Facebook"
                href="#"
                className="rounded-md bg-[#55555c] text-white shadow-md p-2 "
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                aria-label="Twitter"
                href="#"
                className="rounded-md bg-[#55555c] text-white shadow-md p-2 "
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                aria-label="Instagram"
                href="#"
                className="rounded-md bg-[#55555c] text-white shadow-md p-2 "
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                aria-label="LinkedIn"
                href="#"
                className="rounded-md bg-[#55555c] text-white shadow-md p-2 "
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-4 text-center text-xs  flex justify-between">
            <p className="text-sm">Demostip@Resuma.com</p>
            <p>© 2025 Resuma. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
