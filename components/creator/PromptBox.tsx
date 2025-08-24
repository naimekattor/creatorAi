import { FileText, ImageIcon, Mic, Paperclip, Send, X } from "lucide-react";
import { useEffect } from "react";

interface PromptBoxProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  attachedFiles: File[];
  removeFile: (index: number) => void;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleSend: () => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  transcript: string;
  listening: boolean;
  startListening: () => void;
  stopListening: () => void;
}

const PromptBox = ({
  message,
  setMessage,
  attachedFiles,
  removeFile,
  handleFileUpload,
  fileInputRef,
  handleSend,
  handleKeyPress,
  transcript,
  listening,
  startListening,
  stopListening,
}: PromptBoxProps) => {
  // Update message when transcript changes
  useEffect(() => {
    if (transcript) {
      setMessage(transcript);
    }
  }, [transcript, setMessage]);

  const handleVoiceInput = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <div className="rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur bg-white">
      <div className="flex flex-col gap-3 p-5">
        {/* File attachments */}
        {attachedFiles.length > 0 && (
          <div className="flex flex-wrap gap-2 pb-2 border-b border-white/10">
            {attachedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-sm text-black"
              >
                {file.type?.startsWith("image/") ? (
                  <ImageIcon className="w-4 h-4" />
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
            {/* Speech Recognition Button */}
            <button
              onClick={handleVoiceInput}
              aria-label={listening ? "Stop voice input" : "Start voice input"}
              className={`relative flex items-center justify-center w-11 h-11 rounded-full transition-all ${
                listening
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-500 hover:bg-gray-600"
              }`}
            >
              {listening ? (
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-white/50 rounded-full animate-ping"></div>
                  </div>
                </div>
              ) : (
                <Mic className="text-white" />
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

        {/* Voice Input indicator */}
        {listening && (
          <div className="flex items-center justify-center gap-2 text-blue-400 text-sm">
            <div className="flex space-x-1">
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
            <span>Listening... Click to stop</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default PromptBox;
