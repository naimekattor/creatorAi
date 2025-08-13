import type React from "react";
import Image from "next/image";
import Logo from "./logo";

type Props = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function AuthShell({ title, subtitle, children }: Props) {
  return (
    <div className="grid min-h-[calc(100dvh-0px)] grid-cols-1 md:grid-cols-2">
      {/* Illustration side */}
      <div className="relative hidden bg-[#f1f0f0] md:block">
        {/* <div className="absolute left-8 top-6">
          <Logo />
        </div> */}
        <div className="flex h-full items-center justify-center">
          <Image
            src="/images/login-img.png"
            alt="Creator AI illustration"
            width={560}
            height={440}
            priority
            className="h-screen w-full py-6"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-200/50 to-transparent" />
      </div>

      {/* Form side */}
      <div className="flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {title ? (
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                {title}
              </h1>
              {subtitle ? (
                <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
              ) : null}
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </div>
  );
}
