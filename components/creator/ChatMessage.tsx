"use client";
import React, { useState } from "react";
import { FileText } from "lucide-react";
import Image from "next/image";
import SubscriptionSection from "../SubscriptionSection";
import SubscriptionModal from "../SubscriptionModal";

interface MessageFile {
  name: string;
  type: string;
  src: string;
}

interface Message {
  id: number;
  text: string;
  files: MessageFile[];
  timestamp: string;
  type: "user" | "ai";
}

interface ChatMessageProps {
  msg: Message;
}

export default function ChatMessage({ msg }: ChatMessageProps) {
  const [open, setOpen] = useState(false);
  const handleOnclose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className={`flex ${
          msg.type === "user" ? "justify-end" : "justify-start"
        } relative`}
      >
        <div
          className={`max-w-3xl rounded-2xl p-4 shadow-lg ${
            msg.type === "user"
              ? "bg-blue-600 text-white"
              : "bg-white/90 backdrop-blur text-gray-800"
          }`}
        >
          {msg.text && <p className="text-sm leading-relaxed">{msg.text}</p>}

          {msg.files.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {msg.files.map((file, index) => {
                const isPdf =
                  file.type === "application/pdf" || file.name.endsWith(".pdf");

                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2 text-xs rounded-lg px-2 py-1 cursor-pointer ${
                      isPdf
                        ? "bg-yellow-400 text-black hover:bg-yellow-500"
                        : "bg-black/10"
                    }`}
                    onClick={() => isPdf && setOpen(true)}
                  >
                    {file.type?.startsWith("image/") ? (
                      <Image
                        src={file.src}
                        alt={file.name}
                        width={300}
                        height={200}
                        className="w-[300px] h-[200px] rounded-lg object-cover"
                      />
                    ) : (
                      <FileText className="w-4 h-4" />
                    )}
                    <span className="truncate max-w-[150px]">{file.name}</span>
                  </div>
                );
              })}
            </div>
          )}

          <p className="text-xs opacity-70 mt-2">{msg.timestamp}</p>
        </div>
      </div>

      {/* Subscription Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)} // close modal when background is clicked
        >
          <div onClick={(e) => e.stopPropagation()} className="relative z-50">
            <SubscriptionModal onClose={handleOnclose} />
          </div>
        </div>
      )}
    </>
  );
}
