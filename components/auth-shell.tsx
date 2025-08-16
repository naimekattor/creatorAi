import Image from "next/image";
import Link from "next/link";

type Props = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function AuthShell({ title, subtitle, children }: Props) {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        {/* Left side - Illustration */}
        <div className="relative hidden lg:flex bg-gray-200 items-center justify-center p-8">
          {/* Creator Logo */}
          <div className="absolute left-8 top-8">
            <div className="flex items-center space-x-2">
              <Link
                href={"/"}
                className="text-2xl font-bold audiowide-regular text-gray-700"
              >
                Creator
              </Link>
            </div>
          </div>

          {/* Main Illustration */}
          <div className="relative max-w-lg w-full">
            <Image
              src="/images/login_photo.png"
              alt="Creator AI illustration"
              width={500}
              height={400}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="flex flex-col bg-white p-6 lg:p-16 overflow-y-auto">
          {/* Mobile Header Logo */}
          <div className="flex justify-center lg:hidden mb-6">
            <Link href={"/"} className="text-2xl font-bold text-gray-700">
              Creator
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-md space-y-8">
              {/* Header */}
              <div className="text-center lg:text-left">
                {title ? (
                  <>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {title}
                    </h1>
                    {subtitle ? (
                      <p className="text-gray-600 text-base">{subtitle}</p>
                    ) : null}
                  </>
                ) : (
                  <>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      Login Account
                    </h1>
                    <p className="text-gray-600 text-base">
                      Empowering hotels and restaurants
                    </p>
                  </>
                )}
              </div>

              {/* Form Container */}
              <div className="space-y-6">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
