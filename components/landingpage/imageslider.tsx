'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

const images: string[] = [
  "/images/slider/image_kazna_1.png", // Replace with your image paths
  "/images/slider/image_kazna_2.png", // Replace with your image paths
  "/images/slider/image_kazna_3.png", // Replace with your image paths
  "/images/slider/image_kazna_4.png", // Replace with your image paths
  "/images/slider/image_kazna_5.png", // Replace with your image paths
  "/images/slider/image_kazna_6.png", // Replace with your image paths

  
];

const ImageSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="relative overflow-hidden w-[500px] flex justify-center">
        <div
          className=" inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0 relative h-[440px] items-center flex justify-center">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={200}
                height={300}
                className="object-cover mt-12"
                priority
              />
            </div>
          ))}
        </div>
  
        {/* <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div> */}
      </div>
    );
  };

export default ImageSlider;
