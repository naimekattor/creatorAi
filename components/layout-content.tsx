"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/site-header";
import Footer from "@/components/site-footer";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <header className="bg-black sticky top-0 z-50">
        <Header />
      </header>

      {children}

      {pathname !== "/creator" && <Footer />}
    </>
  );
}
