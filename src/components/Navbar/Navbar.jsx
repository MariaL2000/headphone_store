import React, { useState } from "react"
import { NavbarMenu } from "../../Data/data"
import { SlEarphones } from "react-icons/sl"
import { MdMenu, MdClose } from "react-icons/md"
import { UpdateFollower } from "react-mouse-follower"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Variantes para animación del menú móvil
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  }

  return (
    <div
      style={{
        "--brand-dark": "#0a0a0a",
        "--white": "#ffffff",
        "--text-muted": "rgba(255,255,255,0.7)",
      }}
    >
      <div
        className="bg-[var(--brand-dark)] text-[var(--white)]"
      >
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[1200px] mx-auto flex justify-between items-center py-4 px-4 md:px-6"
        >
          {/* Logo */}
          <div>
            <a href="#" className="text-xl font-bold uppercase leading-none">
              Headphones /{" "}
              <span className="text-[var(--header)]">Harmony</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            {NavbarMenu.map((item) => (
              <UpdateFollower
                key={item.id}
                mouseOptions={{
                  backgroundColor: "var(--white)",
                  zIndex: 999,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <a
                  href={item.link}
                  className="text-sm uppercase py-2 px-3 hover:text-gray-300 transition"
                >
                  {item.title}
                </a>
              </UpdateFollower>
            ))}
          </div>

          {/* Icon section */}
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "var(--white)",
              zIndex: 999,
              followSpeed: 1.5,
              scale: 5,
              mixBlendMode: "difference",
            }}
          >
            <button className="text-xl ps-4 md:ps-6">
              <SlEarphones />
            </button>
          </UpdateFollower>

          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden px-4 py-6 bg-[var(--brand-dark)]"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <ul className="flex flex-col gap-4">
                {NavbarMenu.map((item) => (
                  <motion.li
                    key={item.id}
                    variants={menuItemVariants}
                    className="w-full"
                  >
                    <a
                      href={item.link}
                      className="block uppercase text-sm py-2 px-2 hover:text-gray-300 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar
