import React from "react";
import { FileText, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function ChatMessage({ msg }) {
  return (
    <div
      className={`flex ${
        msg.type === "user" ? "justify-end" : "justify-start"
      }`}
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
            {msg.files.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-xs bg-black/10 rounded-lg px-2 py-1"
              >
                {file.type?.startsWith("image/") ? (
                  <Image
                    src={file.src}
                    alt="image"
                    width={300}
                    height={200}
                    className="w-[300px] h-[200px"
                  />
                ) : (
                  <FileText className="w-3 h-3" />
                )}
                <span className="truncate max-w-[150px]">{file.name}</span>
              </div>
            ))}
          </div>
        )}

        <p className="text-xs opacity-70 mt-2">{msg.timestamp}</p>
      </div>
    </div>
  );
}
