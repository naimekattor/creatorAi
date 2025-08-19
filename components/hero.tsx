"use client";
import Image from "next/image";
import { Paperclip, Send } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSend = () => {
    if (message.trim()) {
      // Redirect to creator page with the message as URL parameter
      const encodedMessage = encodeURIComponent(message.trim());
      router.push(`/creator?message=${encodedMessage}&autoSend=true`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileClick = () => {
    // Redirect to creator page for file functionality
    router.push("/creator");
  };

  const handleMicClick = () => {
    // Redirect to creator page for mic functionality
    router.push("/creator");
  };

  return (
    <section className="relative w-full overflow-hidden bg-black h-[795px]">
      <video
        src="https://res.cloudinary.com/dcykzqkez/video/upload/f_auto,q_auto,vc_auto/v1755160079/heroVideo2_evgqhe.m3u8"
        width={1600}
        height={795}
        autoPlay
        poster="https://res.cloudinary.com/dcykzqkez/image/upload/f_auto,q_auto/v1755406278/hero_poster_wddjdj.png"
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      ></video>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:py-24 z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl tracking-wider text-white text-[40px] font-bold sm:text-4xl">
              Hi, Describe your details Here
            </h1>
            <p className="mt-3 text-[#979797] text-[22px] md:w-1/2 w-full mx-auto">
              Provide your desired job and your resume details we will prepare
              best resume for you
            </p>
          </div>

          {/* Prompt bar */}
          <div className="mx-auto w-full max-w-5xl rounded-xl bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur">
            <div className="flex flex-col gap-3 p-5">
              <div>
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  aria-label="Describe your details"
                  placeholder="Enter here your Details"
                  className="w-full rounded-md border border-[#e3e7f1]/60 bg-black/40 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40"
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={handleFileClick}
                  aria-label="Attach"
                  className="flex h-11 w-11 items-center justify-center rounded-md text-[#8F9FB0] hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Paperclip className="h-7 w-7" />
                </button>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={handleMicClick}
                    aria-label="Voice"
                    className="flex h-7 w-7 items-center justify-center bg-gray-500 rounded-full hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    <Image
                      alt="mic"
                      src="/images/vector.png"
                      width={28}
                      height={28}
                      className="h-4 w-4"
                    />
                  </button>
                  <button
                    onClick={handleSend}
                    className="h-11 px-4 hover:bg-white/10 rounded-md transition-colors cursor-pointer"
                    disabled={!message.trim()}
                  >
                    <Send
                      className={`mr-2 h-8 w-8 transition-colors ${
                        message.trim() ? "text-blue-500" : "text-[#8F9FB0]"
                      }`}
                    />
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
