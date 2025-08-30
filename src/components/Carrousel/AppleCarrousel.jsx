import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./Card";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AppleCarousel({ items, className = "" }) {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    containerRef.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative w-full py-10 ${className}`}>
      {/* Carrusel */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-6 scrollbar-hide"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[90vw] md:w-[70vw] lg:w-[50vw] snap-center"
          >
            <Card className="bg-white h-full min-h-[500px] flex flex-col justify-between overflow-hidden rounded-2xl shadow-md">
              
              {/* Imagen */}
              <div className="w-full h-[400px] flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col gap-4 flex-grow text-center">
                <motion.h3
                  className="text-3xl font-bold text-gray-900"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="text-lg text-gray-600"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {item.subtitle}
                </motion.p>

                <motion.p
                  className="text-gray-500 leading-relaxed"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {item.description}
                </motion.p>

                <div className="flex gap-3 pt-4 justify-center">
                  <button className="px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-200">
                    Buy
                  </button>
                  <button className="px-6 py-2 border border-gray-400 text-gray-700 rounded-full font-semibold hover:border-black hover:text-black transition-all duration-200">
                    Learn more
                  </button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Flechas de navegación */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => scroll("left")}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
