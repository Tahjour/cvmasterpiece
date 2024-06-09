import Image from "next/image";
import "./globals.css"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-3">CVMasterpiece</h1>
        <h4 className="mb-6">Create your perfect CV/Resume</h4>
        <textarea
          name="textInput"
          id="textInput"
          placeholder="Enter text"
          className="textarea-gradient-border w-full max-w-lg rounded-2xl focus:outline-none"
        ></textarea> 
      </div>
    </main>
  );
}
