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

  // Routes where Header should be hidden
  const headerExcludedRoutes = [
    "/login",
    "/register",
    "/account-created-success",
    "/activation-code",
    "/forgot-password",
    "/password-changes-success",
    "/reset-password",
  ];

  // Routes where Footer should be hidden
  const footerExcludedRoutes = [
    "/creator",
    ...headerExcludedRoutes, // Footer excludes everything Header excludes + creator
  ];

  const showHeader = !headerExcludedRoutes.includes(pathname);
  const showFooter = !footerExcludedRoutes.includes(pathname);

  return (
    <>
      {showHeader && (
        <header className="bg-black sticky top-0 z-50">
          <Header />
        </header>
      )}

      <main>{children}</main>

      {showFooter && <Footer />}
    </>
  );
}
