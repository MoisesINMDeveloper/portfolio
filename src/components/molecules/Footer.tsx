// Footer.tsx

import React from "react";
import { SocialLinks } from "@/constant/data";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bgBlack text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-center space-x-8">
          {SocialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              >
                <IconComponent className="text-3xl text-GreenColor" />
              </Link>
            );
          })}
        </div>
        <p className="mt-4 text-center text-gray-400">
          © {new Date().getFullYear()} Moises Israel Developer. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
