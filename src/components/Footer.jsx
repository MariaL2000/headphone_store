import React from "react";
import { NavbarMenu } from "../Data/data";
import {
  FaHeadphones,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full max-w-full overflow-x-hidden box-border py-14 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-12">
        {/* Logo */}
        <div className="flex items-center gap-3 w-full">
          <FaHeadphones className="text-4xl" style={{ color: "var(--header)" }} />
          <span className="text-2xl font-bold tracking-wide">Headphone Store</span>
        </div>

        {/* Secciones */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm text-gray-400 w-full">
          {["Products", "Support", "Community", "Company", "Legal"].map((title, idx) => (
            <div key={idx} className="w-full">
              <h4 className="text-white font-semibold mb-3">{title}</h4>
              <ul className="space-y-2">
                {NavbarMenu.filter((link) => link.category === title).map((link) => (
                  <li key={link.id}>
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contacto */}
        <div className="text-gray-400 text-sm border-t border-gray-800 pt-6 w-full">
          <p>
            Need help choosing the perfect headphones?{" "}
            <span className="underline" style={{ color: "var(--header)" }}>
              Chat with an expert
            </span>{" "}
            or call{" "}
            <span className="font-semibold" style={{ color: "var(--header)" }}>
              1-800-HEADPHONES
            </span>.
          </p>
        </div>

        {/* Redes sociales + links legales */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 border-t border-gray-800 pt-6 w-full flex-wrap">
          <p className="text-xs sm:text-sm text-gray-500 font-medium w-full md:w-auto">
            © 2025 Headphone Store. All rights reserved.
          </p>

          <div className="flex gap-5 text-lg flex-wrap w-full md:w-auto">
            <a href="#" style={{ color: "var(--header)" }}><FaFacebookF /></a>
            <a href="#" style={{ color: "var(--header)" }}><FaTwitter /></a>
            <a href="#" style={{ color: "var(--header)" }}><FaInstagram /></a>
            <a href="#" style={{ color: "var(--header)" }}><FaYoutube /></a>
            <a href="#" style={{ color: "var(--header)" }}><FaSpotify /></a>
            <a href="#" style={{ color: "var(--header)" }}><FaTiktok /></a>
          </div>

          <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-400 font-medium w-full md:w-auto">
            {NavbarMenu.map((link, i) => (
              <a key={link.id} href={link.link}>
                {link.title}
                {i !== NavbarMenu.length - 1 && <span className="mx-1 sm:mx-2">|</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
