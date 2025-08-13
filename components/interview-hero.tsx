import Image from "next/image";

export default function InterviewHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <video
        src="/video/creator-video.mp4"
        width={1600}
        height={795}
        autoPlay
        muted
        loop
        playsInline
        className="inset-0 w-full h-full object-cover opacity-40"
      ></video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container relative mx-auto px-4 py-20 text-center md:py-28">
          <h2 className="mx-auto w-1/2 text-3xl uppercase tracking-wide text-white sm:text-4xl font-bold md:text-[42px]">
            Make every job interview count
          </h2>
          <p className="mx-auto mt-4 text-[24px] w-1/3 text-[#F6F6F6">
            Build a powerful CV that highlights your best skills
          </p>
        </div>
      </div>
    </section>
  );
}
