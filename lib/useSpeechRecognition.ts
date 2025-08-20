import { useEffect, useRef, useState } from "react";

export const useSpeechRecognition = (lang: string = "en-US") => {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const listeningRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech Recognition not supported in this browser.");
      return;
    }

    const recog = new SpeechRecognition();
    recog.continuous = true;
    recog.interimResults = true;
    recog.lang = lang;

    recog.onresult = (e: SpeechRecognitionEvent) => {
      let finalText = "";
      let interimText = "";

      for (let i = 0; i < e.results.length; i++) {
        const result = e.results[i];
        if (result.isFinal) finalText += result[0].transcript + " ";
        else interimText += result[0].transcript;
      }

      setTranscript(finalText + interimText);
    };

    recog.onerror = (err) => console.error("Speech recognition error:", err);

    recog.onend = () => {
      if (listeningRef.current) recog.start(); // auto-restart if listening
    };

    recognitionRef.current = recog;
  }, [lang]);

  const startListening = () => {
    if (recognitionRef.current && !listeningRef.current) {
      recognitionRef.current.start();
      listeningRef.current = true;
      setListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && listeningRef.current) {
      recognitionRef.current.stop();
      listeningRef.current = false;
      setListening(false);
    }
  };

  return { transcript, listening, startListening, stopListening };
};
