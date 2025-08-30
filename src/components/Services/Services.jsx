import React, { useEffect, useRef, useState } from "react";

const ScrollSection = ({ title, items, onSectionComplete }) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollTop = window.scrollY;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Progreso relativo de 0 a 1
      let progress = (scrollTop - containerTop) / (containerHeight - windowHeight);
      progress = Math.max(0, Math.min(progress, 1));

      const newIndex = Math.floor(progress * items.length);
      setCurrentIndex(Math.min(newIndex, items.length));

      if (progress >= 1 && onSectionComplete) onSectionComplete();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items.length, onSectionComplete]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${window.innerHeight + items.length * window.innerHeight}px` }}
    >
      {/* Sticky section */}
      <div className="sticky top-0 h-screen flex flex-col justify-center px-6 py-16 bg-black text-white">
        <h2 className="text-4xl md:text-6xl font-thin tracking-tight mb-8">{title}</h2>
        <div className="space-y-12">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-500 ease-out transform ${
                index < currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl md:text-4xl font-light mb-2">{item.title}</h3>
              <p className="text-lg md:text-xl opacity-80">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
