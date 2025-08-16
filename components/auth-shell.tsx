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
              onError={(e) => {
                // Fallback SVG illustration
                e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="500" height="400" viewBox="0 0 500 400"><rect width="500" height="400" fill="%23e5e7eb"/><g transform="translate(50, 50)"><rect x="150" y="50" width="200" height="250" rx="10" fill="white" stroke="%23d1d5db" stroke-width="2"/><rect x="160" y="70" width="40" height="8" rx="4" fill="%233b82f6"/><rect x="210" y="70" width="60" height="8" rx="4" fill="%238b5cf6"/><rect x="160" y="90" width="180" height="60" rx="8" fill="%23fef3c7"/><circle cx="200" cy="120" r="15" fill="%23f59e0b"/><text x="230" y="125" font-family="Arial" font-size="12" font-weight="bold" fill="%23374151">CV</text><rect x="160" y="160" width="180" height="4" rx="2" fill="%23e5e7eb"/><rect x="160" y="170" width="140" height="4" rx="2" fill="%23e5e7eb"/><rect x="160" y="180" width="160" height="4" rx="2" fill="%23e5e7eb"/><rect x="160" y="200" width="180" height="4" rx="2" fill="%23bfdbfe"/><rect x="160" y="210" width="120" height="4" rx="2" fill="%23bfdbfe"/><rect x="160" y="220" width="150" height="4" rx="2" fill="%23bfdbfe"/><rect x="160" y="240" width="180" height="4" rx="2" fill="%23bfdbfe"/><rect x="160" y="250" width="100" height="4" rx="2" fill="%23bfdbfe"/><rect x="160" y="260" width="170" height="4" rx="2" fill="%23bfdbfe"/><circle cx="120" cy="200" r="40" fill="%233b82f6"/><circle cx="115" cy="190" r="8" fill="white"/><path d="M105 210 Q120 220 135 210" stroke="white" stroke-width="3" fill="none"/><rect x="100" y="240" width="15" height="30" fill="%233b82f6"/><rect x="125" y="240" width="15" height="30" fill="%233b82f6"/><circle cx="80" cy="280" r="20" fill="%2310b981"/><circle cx="380" cy="100" r="25" fill="%2310b981"/><rect x="370" y="140" width="8" height="40" rx="4" fill="%233b82f6"/><rect x="385" y="140" width="8" height="40" rx="4" fill="%233b82f6"/></g></svg>`;
              }}
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
