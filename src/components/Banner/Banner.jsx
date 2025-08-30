import headphone4 from "../../assets/headphone4.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      className=" overflow-hidden w-full flex justify-center items-center py-18 bg-black overflow-x-hidden"
      id="contact"
    >
      <div className="w-full max-w-[1400px] mx-auto py-14 grid grid-cols-1 md:grid-cols-2 items-center gap-8 overflow-hidden">
        
        {/* Banner image */}
        <div className="w-full flex justify-center items-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -180 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="flex justify-center items-center"
          >
            <img
              src={headphone4}
              alt="Headphones"
              className="max-w-full object-contain"
            />
          </motion.div>
        </div>

        {/* Banner text */}
        <div className="flex flex-col justify-center text-center md:text-left w-full space-y-4 px-6">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins"
            style={{ color: "var(--header)" }}
          >
            Discover the Latest Technology
          </h1>
          <p
            className="text-white sm:text-lg max-w-xl mx-auto md:mx-0"
            style={{ color: "var(--white)" }}
          >
            Experience immersive sound quality with our latest headphones,
            designed for comfort, style, and unmatched audio performance.
          </p>
          <button
            className="px-6 py-2 rounded-md text-white font-semibold transition-all duration-300 max-w-fit mx-auto md:mx-0"
            style={{
              backgroundColor: "var(--header)",
              border: "2px solid var(--header)",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "var(--headerdark)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "var(--header)")
            }
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
