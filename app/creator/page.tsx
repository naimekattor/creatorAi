"use client";
export const dynamic = "force-dynamic";

import React, { useState, useRef, Suspense } from "react";
import { useSpeechRecognition } from "@/lib/useSpeechRecognition";
import CreatorContent from "@/components/creator/CreatorContent";
interface MessageFiles {
  name: string;
  type: string;
  src: string;
}
interface Message {
  id: number;
  text: string;
  files: MessageFiles[];
  timestamp: string;
  type: "user" | "ai";
}
export default function CreatorPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [hasAutoSent, setHasAutoSent] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const { transcript, listening, startListening, stopListening } =
    useSpeechRecognition();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreatorContent
        message={message}
        setMessage={setMessage}
        messages={messages}
        setMessages={setMessages}
        attachedFiles={attachedFiles}
        setAttachedFiles={setAttachedFiles}
        hasAutoSent={hasAutoSent}
        setHasAutoSent={setHasAutoSent}
        fileInputRef={fileInputRef}
        chatEndRef={chatEndRef}
        transcript={transcript}
        listening={listening}
        startListening={startListening}
        stopListening={stopListening}
      />
    </Suspense>
  );
}
