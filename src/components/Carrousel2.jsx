import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { imageSlides } from "../Data/data";
import { Play, Pause, RotateCw } from "lucide-react";

const ImageCarousel = () => {
  const sliderRef = useRef(null);
  const textRef = useRef([]);
  const [imageId, setImageId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const length = imageSlides.length;

  // Animación del slider y textos
  const animateSlide = (id) => {
    if (!sliderRef.current) return;

    gsap.to(sliderRef.current, {
      x: `-${id * 100}%`, 
      duration: 1.2,
      ease: "power2.inOut",
    });

    if (textRef.current[id]) {
      gsap.fromTo(
        textRef.current[id],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  };

  // Auto-play
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setImageId((prev) => (prev + 1) % length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, length]);

  useEffect(() => {
    animateSlide(imageId);
  }, [imageId]);

  const handleControl = () => {
    if (imageId === length - 1) {
      setImageId(0);
      setIsPlaying(true);
    } else {
      setIsPlaying((prev) => !prev);
    }
  };

  const goToSlide = (index) => {
    setImageId(index);
  };

  return (
    <div className="w-full mt-15 flex flex-col mb-15 items-center justify-center" id="about">
      {/* Contenedor del slider */}
      <div className="overflow-hidden w-full max-w-7xl">
        <div
          ref={sliderRef}
          className="flex w-full transition-transform duration-1000 ease-in-out"
        >
          {imageSlides.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full flex justify-center relative px-3"
            >
              <div className="relative w-full 
                              h-[60vh] sm:h-[65vh] md:h-[65vh] lg:h-[70vh] xl:h-[80vh] 
                              flex items-center justify-center 
                              rounded-3xl overflow-hidden bg-black">
                <img
                  src={item.src}
                  alt={item.alt || `slide-${i}`}
                  className="object-contain w-full h-full"
                />

                {item.textLists && (
                  <div
                    ref={(el) => (textRef.current[i] = el)}
                    className="absolute inset-x-0 top-6 flex flex-col items-center text-center 
                               md:left-8 md:top-10 md:items-start md:text-left 
                               max-w-[90%] md:max-w-[60%] lg:max-w-[50%] 
                               text-white gap-3"
                  >
                    {item.textLists.map((text, j) => (
                      <p
                        key={j}
                        className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                                   font-bold leading-snug drop-shadow-md text-pretty"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Barra de progreso y control */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        <div className="flex items-center justify-center py-3 px-5 bg-gray-300 backdrop-blur rounded-full">
          {imageSlides.map((_, i) => (
            <span
              key={i}
              className="mx-1 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              onClick={() => goToSlide(i)}
            >
              <span
                className={`absolute h-full w-full rounded-full transition-all duration-300 ${
                  i === imageId ? "bg-white" : "bg-gray-400"
                }`}
              />
            </span>
          ))}
        </div>

        <button
          className="ml-4 p-3 rounded-full bg-gray-300 backdrop-blur flex items-center justify-center text-sm sm:text-base md:text-lg"
          onClick={handleControl}
        >
          {imageId === length - 1 ? (
            <RotateCw className="w-6 h-6 text-black" />
          ) : isPlaying ? (
            <Pause className="w-6 h-6 text-black" />
          ) : (
            <Play className="w-6 h-6 text-black" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
