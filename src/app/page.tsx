"use client";
import { useEffect, useRef } from "react";
import "./globals.css";

export default function Home() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      const handleInput = () => {
        textArea.style.height = "auto";
        const scrollHeight = textArea.scrollHeight;
        // Force a reflow to ensure the transition is applied
        textArea.style.height = `${scrollHeight}px`;
        textArea.offsetHeight; // Trigger a reflow
        textArea.style.height = `${Math.min(scrollHeight, 500)}px`;
      };

      textArea.addEventListener("input", handleInput);

      // Initial resize to fit the initial content
      handleInput();

      return () => {
        textArea.removeEventListener("input", handleInput);
      };
    }
  }, []);
  return (
    <main className="flex flex-col min-h-screen justify-start items-center p-5">
      <h1 className="text-4xl mb-3">CVMasterpiece</h1>
      <h4 className="mb-6">Create your perfect CV/Resume</h4>
      <textarea
        ref={textAreaRef}
        name="textInput"
        id="textInput"
        placeholder="Paste job description here"
        className="textarea-gradient-border w-full max-w-lg rounded-2xl focus:outline-none"
      ></textarea>
    </main>
  );
}
