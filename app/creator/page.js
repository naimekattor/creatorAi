"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Paperclip,
  Send,
  X,
  FileText,
  Image as ImageIcon,
  Mic,
} from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function CreatorPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [hasAutoSent, setHasAutoSent] = useState(false);
  const fileInputRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordingIntervalRef = useRef(null);
  const chatEndRef = useRef(null);
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

  // simulate answer
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

  // Auto scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Recording timer
  useEffect(() => {
    if (isRecording) {
      recordingIntervalRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
      setRecordingTime(0);
    }

    return () => {
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
    };
  }, [isRecording]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setAttachedFiles((prev) => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          const audioBlob = new Blob([event.data], { type: "audio/wav" });
          const audioFile = new File(
            [audioBlob],
            `recording-${Date.now()}.wav`,
            { type: "audio/wav" }
          );
          setAttachedFiles((prev) => [...prev, audioFile]);
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("Could not access microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

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
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section className="relative w-full h-[calc(100vh-65px)] flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="creatorbg"
          src="/images/creator-bg.png"
          className=" object-cover"
          fill
          priority
        />
      </div>

      {/* Content Layout */}
      <div className="relative flex-1 flex flex-col min-h-0">
        {messages.length === 0 ? (
          // Initial State - Centered Content
          <div className="flex-1 flex items-center justify-center">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="mx-auto max-w-3xl text-center mb-10">
                <h1 className="text-3xl tracking-wider text-[#56627D] text-[40px] font-bold sm:text-4xl">
                  Hi, Describe your details Here
                </h1>
                <p className="mt-3 text-[#979797] text-[22px] w-1/2 mx-auto">
                  Provide your desired job and your resume details we will
                  prepare best resume for you
                </p>
              </div>

              {/* Prompt bar - Centered */}
              <div className="mx-auto w-full max-w-5xl">
                <PromptBox
                  message={message}
                  setMessage={setMessage}
                  attachedFiles={attachedFiles}
                  setAttachedFiles={setAttachedFiles}
                  removeFile={removeFile}
                  handleFileUpload={handleFileUpload}
                  fileInputRef={fileInputRef}
                  isRecording={isRecording}
                  recordingTime={recordingTime}
                  startRecording={startRecording}
                  stopRecording={stopRecording}
                  handleSend={handleSend}
                  handleKeyPress={handleKeyPress}
                  formatTime={formatTime}
                />
              </div>
            </div>
          </div>
        ) : (
          // Chat State - Chat area + Fixed bottom input
          <>
            {/* Chat Area with Proper Scrolling */}
            <div className="flex-1 overflow-y-auto min-h-0 p-4">
              <div className="container mx-auto max-w-4xl space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
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
                      {msg.text && (
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      )}
                      {msg.files.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {msg.files.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 text-xs bg-black/10 rounded-lg px-2 py-1"
                            >
                              {file.type?.startsWith("image/") ? (
                                <ImageIcon className="w-3 h-3" />
                              ) : file.type?.startsWith("audio/") ? (
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                              ) : (
                                <FileText className="w-3 h-3" />
                              )}
                              <span className="truncate max-w-[150px]">
                                {file.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="text-xs opacity-70 mt-2">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            </div>

            {/* Fixed Bottom Prompt Bar */}
            <div className="flex-shrink-0 bg-gradient-to-t from-black/20 to-transparent p-4">
              <div className="container mx-auto max-w-4xl">
                <PromptBox
                  message={message}
                  setMessage={setMessage}
                  attachedFiles={attachedFiles}
                  setAttachedFiles={setAttachedFiles}
                  removeFile={removeFile}
                  handleFileUpload={handleFileUpload}
                  fileInputRef={fileInputRef}
                  isRecording={isRecording}
                  recordingTime={recordingTime}
                  startRecording={startRecording}
                  stopRecording={stopRecording}
                  handleSend={handleSend}
                  handleKeyPress={handleKeyPress}
                  formatTime={formatTime}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// Extracted PromptBox component for reusability
function PromptBox({
  message,
  setMessage,
  attachedFiles,
  removeFile,
  handleFileUpload,
  fileInputRef,
  isRecording,
  recordingTime,
  startRecording,
  stopRecording,
  handleSend,
  handleKeyPress,
  formatTime,
}) {
  return (
    <div className="rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur bg-white">
      <div className="flex flex-col gap-3 p-5">
        {/* File attachments */}
        {attachedFiles.length > 0 && (
          <div className="flex flex-wrap gap-2 pb-2 border-b border-white/10">
            {attachedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-sm text-white"
              >
                {file.type?.startsWith("image/") ? (
                  <ImageIcon className="w-4 h-4" />
                ) : file.type?.startsWith("audio/") ? (
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                ) : (
                  <FileText className="w-4 h-4" />
                )}
                <span className="truncate max-w-[200px]">{file.name}</span>
                <button
                  onClick={() => removeFile(index)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            aria-label="Describe your details"
            placeholder="Enter here your Details"
            className="w-full rounded-md border border-[#E3E7F1] px-4 py-3 text-sm placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40 text-black"
          />
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              multiple
              className="hidden"
              accept="*/*"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              aria-label="Attach"
              className="flex h-11 w-11 items-center justify-center rounded-md text-[#8F9FB0] hover:bg-white/10 transition-colors"
            >
              <Paperclip className="h-7 w-7" />
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <button
              onClick={isRecording ? stopRecording : startRecording}
              aria-label={isRecording ? "Stop recording" : "Start recording"}
              className={`relative flex items-center justify-center w-11 h-11 rounded-full transition-all ${
                isRecording
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-gray-500 hover:bg-gray-600"
              }`}
            >
              {isRecording ? (
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-4 h-4 bg-white rounded-sm animate-pulse"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-white/50 rounded-sm animate-ping"></div>
                  </div>
                </div>
              ) : (
                <Mic className="text-white" />
              )}

              {isRecording && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {formatTime(recordingTime)}
                </div>
              )}
            </button>

            <button
              onClick={handleSend}
              className="h-11 px-4 hover:bg-white/10 rounded-md transition-colors"
              disabled={!message.trim() && attachedFiles.length === 0}
            >
              <Send
                className={`mr-2 h-8 w-8 transition-colors ${
                  message.trim() || attachedFiles.length > 0
                    ? "text-blue-500"
                    : "text-[#8F9FB0]"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Recording indicator */}
        {isRecording && (
          <div className="flex items-center justify-center gap-2 text-red-400 text-sm">
            <div className="flex space-x-1">
              <div
                className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
            <span>Recording... Click to stop</span>
          </div>
        )}
      </div>
    </div>
  );
}
