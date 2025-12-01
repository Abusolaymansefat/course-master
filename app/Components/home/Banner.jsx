"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = ["https://i.ibb.co/kg71Yh9V/istockphoto-1998218854-612x612.jpg",
     "https://i.ibb.co/kg71Yh9V/istockphoto-1998218854-612x612.jpg",
      "https://i.ibb.co/7JVNf2N1/images.jpg"];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      
      {/* Background Carousel Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="Banner Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      ))}

      {/* Text Content */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
          Learn Anytime, Anywhere with CourseMaster
        </h1>
      </div>
    </div>
  );
}
