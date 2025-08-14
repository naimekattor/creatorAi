import { Paperclip, Send } from "lucide-react";
import Image from "next/image";

export default function CreatorPage() {
  return (
    <section className="relative w-full overflow-hidden h-full">
      <Image
        alt="creatorbg"
        src="/images/creator-bg.png"
        width={1440}
        height={960}
        className="h-screen w-full"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:py-24 z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl  tracking-wider text-[#56627D] text-[40px] font-bold sm:text-4xl">
              Hi, Describe your details Here
            </h1>
            <p className="mt-3 text-[#979797] text-[22px] w-1/2 mx-auto">
              Provide your desired job and your resume details we will prepare
              best resume for you
            </p>
          </div>

          {/* Prompt bar */}
          <div className="mx-auto w-full max-w-5xl rounded-xl   bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur">
            <div className="flex flex-col gap-3 p-5">
              <div>
                <input
                  aria-label="Describe your details"
                  placeholder="Enter here your Details"
                  className="w-full rounded-md border border-[#E3E7F1]  px-4 py-3 text-sm text-slate-200 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40"
                />
              </div>
              <div className="flex justify-between">
                <button
                  aria-label="Attach"
                  className="flex h-11 w-11 items-center justify-center rounded-md   text-[#8F9FB0] "
                >
                  <Paperclip className="h-7 w-7" />
                </button>
                <div className="flex gap-2 items-center">
                  <button
                    aria-label="Voice"
                    className="flex h-7 w-7 items-center justify-center  bg-gray-500 rounded-full"
                  >
                    <Image
                      alt="mic"
                      src="/images/vector.png"
                      width={28}
                      height={28}
                      className="h-4 w-4"
                    />
                  </button>
                  <button className="h-11   px-4  ">
                    <Send className="mr-2 h-8 w-8 text-[#8F9FB0]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
