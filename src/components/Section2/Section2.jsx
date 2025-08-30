import React, { useState } from "react";
import { headphoneData } from "../../Data/data";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 100, scale: 0.5 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, delay, ease: easeInOut } },
  exit: { opacity: 0, y: 50, scale: 0.5, transition: { duration: 0.2, ease: easeInOut } },
});

const Section2 = () => {
  const [activeData, setActiveData] = useState(headphoneData[0]);
  const [hoverImage, setHoverImage] = useState(null);

  const handleActiveData = (data) => {
    setActiveData(data);
    document.documentElement.style.setProperty("--active-color", data.bgColor);
  };

  return (
    <div style={{ "--brand-dark": "black", "--white": "#ffffff", "--active-color": activeData.bgColor }}>
      
      {/* Cursor global solo visible al hacer hover */}
      {hoverImage && (
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "rgba(255,255,255,0)",
            zIndex: 9999,
            followSpeed: 0.3,
            rotate: 0,
            scale: 5,
            mixBlendMode: "difference",
          }}
          render={() => (
            <div className="w-12 h-12 rounded-full overflow-hidden pointer-events-none">
              <img src={hoverImage} alt="hover" className="w-full h-full object-cover" />
            </div>
          )}
        />
      )}

      {/* Sección con animación al hacer scroll */}
      <motion.section
        className="font-varela bg-[var(--brand-dark)] text-[var(--white)]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: easeInOut }}
      >
        <div className="max-w-[1300px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[700px]">
          
          {/* Info Column */}
          <div className="flex flex-col mt-3 justify-center space-y-5 text-center md:text-left xl:max-w-[500px] mx-auto md:mx-0">
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeData.id}
                variants={fadeUp(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-3xl lg:text-6xl font-bold"
              >
                {activeData.title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeData.id}
                variants={fadeUp(0.3)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-sm leading-loose text-white/80"
              >
                {activeData.subtitle}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.button
                key={activeData.id}
                variants={fadeUp(0.3)}
                initial="hidden"
                animate="show"
                exit="exit"
                style={{ backgroundColor: "var(--active-color)" }}
                className="px-4 py-3 mt-4 inline-block font-normal rounded-sm text-white hover:brightness-110 transition"
              >
                Buy and enjoy
              </motion.button>
            </AnimatePresence>

            {/* Headphone List con animación escalonada */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-6 justify-items-center md:justify-items-start"
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {headphoneData.map((item) => (
                <motion.div
                  key={item.id}
                  onClick={() => handleActiveData(item)}
                  onMouseEnter={() => setHoverImage(item.image)}
                  onMouseLeave={() => setHoverImage(null)}
                  className="flex flex-col items-center md:items-start cursor-pointer hover:scale-105 transition-transform duration-300"
                  variants={fadeUp()}
                >
                  <img src={item.image} alt={item.title} className="w-[120px] sm:w-[150px] md:w-[180px] xl:w-[200px]" />
                  <p className="text-base font-bold mt-2">{item.price}</p>
                  <p className="text-xs font-normal">{item.modal}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center items-center mt-10 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                src={activeData.image}
                alt={activeData.title}
                className="w-[250px] sm:w-[350px] md:w-[450px] xl:w-[550px] object-contain"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.5, ease: easeInOut }}
              />
            </AnimatePresence>
          </div>

          {/* WhatsApp */}
          <motion.div
            className="fixed bottom-10 right-10 text-3xl z-[9999] text-white"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: easeInOut }}
            whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
          >
            <a href="#">
              <FaWhatsapp />
            </a>
          </motion.div>

        </div>
      </motion.section>
    </div>
  );
};

export default Section2;
