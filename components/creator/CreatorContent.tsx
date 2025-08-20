"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import PromptBox from "./PromptBox";
import ChatMessage from "./ChatMessage";

export default function CreatorContent({
  message,
  setMessage,
  messages,
  setMessages,
  attachedFiles,
  setAttachedFiles,
  hasAutoSent,
  setHasAutoSent,
  fileInputRef,
  chatEndRef,
  transcript,
  listening,
  startListening,
  stopListening,
}) {
  const searchParams = useSearchParams();

  // Handle auto-send from hero page
  useEffect(() => {
    const incomingMessage = searchParams.get("message");
    const shouldAutoSend = searchParams.get("autoSend");

    if (incomingMessage && shouldAutoSend === "true" && !hasAutoSent) {
      setHasAutoSent(true);
      setMessage(incomingMessage);
      setTimeout(() => {
        handleSend();
      }, 1000);
    }
  }, [searchParams, hasAutoSent]);

  const handleSend = () => {
    if (message.trim() || attachedFiles.length > 0) {
      const newMessage = {
        id: Date.now(),
        text: message.trim(),
        files: [...attachedFiles],
        timestamp: new Date().toLocaleTimeString(),
        type: "user",
      };

      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
      setAttachedFiles([]);

      simulateAIResponse();
    }
  };

  const simulateAIResponse = () => {
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: "I'll help you create the best resume based on your details...",
        files: [],
        timestamp: new Date().toLocaleTimeString(),
        type: "ai",
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setAttachedFiles((prev) => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="relative w-full h-[calc(100vh-65px)] flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="creatorbg"
          src="/images/creator-bg.png"
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Content Layout */}
      <div className="relative flex-1 flex flex-col min-h-0">
        {messages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="mx-auto max-w-3xl text-center mb-10">
                <h1 className="text-[40px] font-bold text-[#56627D]">
                  Hi, Describe your details Here
                </h1>
                <p className="mt-3 text-[#979797] text-[22px] w-1/2 mx-auto">
                  Provide your desired job and your resume details we will
                  prepare best resume for you
                </p>
              </div>

              <PromptBox
                message={message}
                setMessage={setMessage}
                attachedFiles={attachedFiles}
                removeFile={removeFile}
                handleFileUpload={handleFileUpload}
                fileInputRef={fileInputRef}
                handleSend={handleSend}
                handleKeyPress={handleKeyPress}
                transcript={transcript}
                listening={listening}
                startListening={startListening}
                stopListening={stopListening}
              />
            </div>
          </div>
        ) : (
          <>
            {/* Chat area */}
            <div className="flex-1 overflow-y-auto min-h-0 p-4">
              <div className="container mx-auto max-w-4xl space-y-4">
                {messages.map((msg) => (
                  <ChatMessage key={msg.id} msg={msg} />
                ))}
                <div ref={chatEndRef} />
              </div>
            </div>

            {/* Fixed bottom input */}
            <div className="flex-shrink-0 bg-gradient-to-t from-black/20 to-transparent p-4">
              <div className="container mx-auto max-w-4xl">
                <PromptBox
                  message={message}
                  setMessage={setMessage}
                  attachedFiles={attachedFiles}
                  removeFile={removeFile}
                  handleFileUpload={handleFileUpload}
                  fileInputRef={fileInputRef}
                  handleSend={handleSend}
                  handleKeyPress={handleKeyPress}
                  transcript={transcript}
                  listening={listening}
                  startListening={startListening}
                  stopListening={stopListening}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
