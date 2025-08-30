import React, { Suspense, lazy, memo } from "react";
import { motion } from "framer-motion";
import Loader from "./Loader"; // Asegúrate que Loader esté en la misma carpeta

// Lazy load de Spline
const Spline = lazy(() => import("@splinetool/react-spline"));

// Memoizamos el texto para no recalcularlo cada render
const HeroText = memo(() => (
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-16 md:pt-24 sm:px-6">
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white"
    >
      <span style={{ color: "var(--header)" }}>Harmony</span> Shop
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl text-white"
    >
      Keep <span style={{ color: "var(--header)" }}>connected</span>{" "}
      with the universe
    </motion.p>
  </div>
));

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background color */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--brand-dark)" }}
      />

      {/* Hero content */}
      <HeroText />

      {/* Spline Animation con Lazy Loading */}
      <Suspense fallback={<Loader />}>
        <div className="absolute inset-0 w-full h-full">
          <Spline
            scene="https://prod.spline.design/yA913u7yGV8yn68S/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </Suspense>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-5" />
    </div>
  );
};

export default Hero;
