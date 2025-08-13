import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src="/images/cta-dark-bg.png"
        alt="Dark CTA background"
        width={1600}
        height={480}
        className="absolute inset-0 h-[480px] w-full object-cover"
      />
      <div className="" />
      <div className="container relative mx-auto max-w-5xl px-4 py-20 text-center md:py-28">
        <h3 className="mx-auto max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
          Use Resume Builder and land your dream job
        </h3>
        <div className="mt-8 flex justify-center">
          <Button className="rounded-md bg-blue-600 px-6 text-white shadow hover:bg-blue-600/90">
            Take a free trial now
          </Button>
        </div>
      </div>
    </section>
  );
}
