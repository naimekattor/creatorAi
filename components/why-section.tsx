import { Button } from "@/components/ui/button";

export default function WhySection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Background video */}
      <video
        src="https://res.cloudinary.com/dcykzqkez/video/upload/q_auto/f_auto/v1755171228/interview-video_eobprg.mp4"
        autoPlay
        muted
        poster="/images/creator_poster.png"
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {/* Dotted accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[850px] top-[150px] hidden h-20 w-20 md:block lg:h-28 lg:w-28"
        >
          <div className="h-full w-full bg-[radial-gradient(#A69C96_2px,transparent_1.5px)] opacity-60 [background-size:10px_10px]" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute left-4 bottom-8 hidden h-20 w-20 md:block lg:h-28 lg:w-28"
        >
          <div className="h-full w-full bg-[radial-gradient(#A69C96_2px,transparent_1.5px)] opacity-60 [background-size:10px_10px]" />
        </div>

        {/* Content */}
        <div className="container mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:gap-12 md:grid-cols-2 md:py-24">
          <div className="hidden md:block" />
          <div className="p-4 sm:p-6 md:order-1 md:ml-8 text-white">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Creator Ai
            </h3>
            <p className="mt-2 text-lg sm:text-xl text-[#A7A7A7]">
              Why is Resuma suitable for?
            </p>
            <p className="mt-4 text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
              Future Resume is a product of FutureLabs — a global innovation &
              digital skill learning center. Future Resume was born of the need
              to create a new way for job-seekers to connect with recruiters.
              Hence, our best hands got to work with one thing in mind: to help
              you find a great job faster. We went even further to ensure that
              our Template designs meet Industry Standards and are accepted by
              leading HR departments. With us, you can spin out an impressive
              resume that makes a memorable first impression!
            </p>
            <Button
              variant="outline"
              className="mt-6 rounded-full border-white/30 text-white hover:bg-white hover:text-black bg-transparent font-bold transition"
            >
              Create account Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
