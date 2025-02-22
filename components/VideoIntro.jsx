"use client";
import { useState, useEffect } from "react";

export default function VideoIntro({ onFinish }) {
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000); // Adjust time as needed
    return () => clearTimeout(timer); // Cleanup
  }, [onFinish]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black relative">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Skip Button */}
      <button
        className="absolute bottom-10 right-10 bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
        onClick={onFinish}
      >
        Skip
      </button>
    </div>
  );
}
