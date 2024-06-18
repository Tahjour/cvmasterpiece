"use client";
import { useEffect, useRef } from "react";
import "./globals.css";

export default function Home() {
  const textAreaJobDescription = useRef<HTMLTextAreaElement>(null);
  const textAreaResumeContent = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleInput = (textArea: HTMLTextAreaElement) => {
      textArea.style.height = "auto";
      const scrollHeight = textArea.scrollHeight;
      textArea.style.height = `${Math.min(scrollHeight, 300)}px`;
    };

    const textAreaJob = textAreaJobDescription.current;
    const textAreaResume = textAreaResumeContent.current;

    const cleanupFunctions: (() => void)[] = [];

    if (textAreaJob) {
      const handleJobInput = () => handleInput(textAreaJob);
      textAreaJob.addEventListener("input", handleJobInput);
      // Initial resize to fit the initial content
      handleJobInput();
      cleanupFunctions.push(() => {
        console.log("cleanup job");
        textAreaJob.removeEventListener("input", handleJobInput);
      });
    }

    if (textAreaResume) {
      const handleResumeInput = () => handleInput(textAreaResume);
      textAreaResume.addEventListener("input", handleResumeInput);
      // Initial resize to fit the initial content
      handleResumeInput();
      cleanupFunctions.push(() => {
        console.log("cleanup resume");
        textAreaResume.removeEventListener("input", handleResumeInput);
      });
    }

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [textAreaJobDescription, textAreaResumeContent]);

  return (
    <main className="flex flex-col min-h-screen justify-start items-center p-5">
      <h1 className="text-4xl mb-3">CVMasterpiece</h1>
      <h4 className="mb-6">Create your perfect CV/Resume</h4>
      <div className="w-full grid grid-cols-2 gap-4 auto-rows-min">
        <textarea
          ref={textAreaJobDescription}
          name="job-description-textarea"
          id="job-description-textarea"
          placeholder="Job description"
          className="textarea-gradient-border w-full max-w-5xl rounded-2xl focus:outline-none"
        ></textarea>
        <textarea
          ref={textAreaResumeContent}
          name="resume-content-textarea"
          id="resume-content-textarea"
          placeholder="Resume content"
          className="textarea-gradient-border w-full max-w-5xl rounded-2xl focus:outline-none"
        ></textarea>
      </div>
    </main>
  );
}
