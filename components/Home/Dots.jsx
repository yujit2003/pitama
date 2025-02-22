"use client";
import React, { useEffect, useState } from "react";

const AnimatedCircles = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const generateCircles = () => {
      return Array.from({ length: 50 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 8 + 4}px`, // Smaller dots for better distribution
        delay: `${Math.random() * 3}s`, // Shorter delay for varied animation
      }));
    };
    setCircles(generateCircles());
  }, []);

  return (
    <div className="relative w-full h-20 overflow-hidden">
      {circles.map((circle, index) => (
        <span
          key={index}
          className="absolute bg-red-400 rounded-full opacity-40 animate-ping"
          style={{
            left: circle.left,
            top: circle.top,
            width: circle.size,
            height: circle.size,
            animationDelay: circle.delay,
          }}
        ></span>
      ))}
    </div>
  );
};

export default AnimatedCircles;
