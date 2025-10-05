"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Define navigation links
  const navLinks = [
    { name: "Home", href: "/", isPage: true }, // redirects to home
    { name: "About", href: "/about" ,isPage:true}, // scrolls
    { name: "Events", href: "/events" ,isPage:true},
    { name: "Journey", href: "/journey", isPage: true },
    { name: "Team", href: "/team" ,isPage:true},
    { name: "Contact", href: "/contact" ,isPage:true},
    { name: "Sponsor Us", href: "/sponsors", isPage: true }, // redirects to sponsors page
    { name: "Merchandise", href: "/merchandise", isPage: true }, // redirects to sponsors page
  ];

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-sm max-md:bg-black" : "bg-transparent max-md:bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo_1.png"
            alt="AeroVJTI"
            className="object-cover"
            width={80}
            height={80}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              {link.isPage ? (
                <Link href={link.href}>{link.name}</Link> // page redirect
              ) : (
                <p onClick={() => scrollToSection(link.href)}>{link.name}</p>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.isPage ? (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-4 px-6 text-white hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <p
                    onClick={() => {
                      scrollToSection(link.href);
                      setIsOpen(false);
                    }}
                    className="block py-4 px-6 text-white hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </p>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
