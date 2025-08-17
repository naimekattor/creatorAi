export default function InterviewHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <video
        src="https://res.cloudinary.com/dcykzqkez/video/upload/q_auto,f_auto/v1755171385/creator-video_m2xzsv.mp4"
        width={1600}
        height={795}
        autoPlay
        muted
        poster="https://res.cloudinary.com/dcykzqkez/image/upload/q_auto,f_auto,v1755406277/interview_poster_uieiwh.png"
        loop
        playsInline
        className="inset-0 w-full h-full object-cover opacity-40"
      ></video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container relative mx-auto px-4 py-20 text-center md:py-28">
          <h2 className="mx-auto md:w-1/2 w-full text-2xl uppercase tracking-wide text-white sm:text-3xl font-bold md:text-[42px]">
            Make every job interview count
          </h2>
          <p className="mx-auto mt-4 md:text-[24px] text-[18px] md:w-1/3 w-full text-[#a7a7a7]">
            Build a powerful CV that highlights your best skills
          </p>
        </div>
      </div>
    </section>
  );
}
