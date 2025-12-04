"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutPage from "./components/about";
import TechPage from "./components/tech";
import ProjectPage from "./components/project";
import ContactPage from "./components/contact";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Tech", "Projects", "Contact"];

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-gray-100">
      {/* ---------------- Header ---------------- */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white/70 dark:bg-gray-900/70 shadow-md backdrop-blur-md flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-purple-600 tracking-wide"
        >
          Sakthibalaji M
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-600 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-6 mt-3 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block hover:text-purple-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </header>

      {/* ---------------- Hero ---------------- */}
      <section
        id="home"
        className="w-full px-6 max-w-6xl mt-[110px] mb-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
      >
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
            Hi 👋, <br />
            I&apos;m <span className="text-purple-600">Sakthibalaji</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium">
            A passionate{" "}
            <span className="text-purple-500">Full Stack Developer</span> <br />
            who loves building modern web apps 🚀
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="rounded-full p-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500"
        >
          <div className="bg-white dark:bg-gray-900 rounded-full p-1">
            <Image
              src="/profile/avatar.png"
              width={200}
              height={200}
              alt="Profile Picture"
              className="rounded-full grayscale hover:grayscale-0 transition"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* ---------------- Sections ---------------- */}
      <section id="about" className="w-full px-6 py-16 max-w-6xl">
        <AboutPage />
      </section>

      <section
        id="tech"
        className="w-full px-6 py-16 max-w-6xl bg-gray-50 dark:bg-gray-900/30 rounded-2xl shadow-inner"
      >
        <TechPage />
      </section>

      <section id="projects" className="w-full px-6 py-16 max-w-6xl">
        <ProjectPage />
      </section>

      <section
        id="contact"
        className="w-full px-6 py-16 max-w-6xl bg-gray-50 dark:bg-gray-900/30 rounded-2xl shadow-inner"
      >
        <ContactPage />
      </section>

           {/* ---------------- Footer ---------------- */}
      <footer className="w-full py-6 mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sakthibalaji • All Rights Reserved
        <br />

        {/* Social Links */}
        <div className="mt-4 flex flex-col items-center justify-center gap-3">
          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>msbala368@gmail.com</span>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <a
              href="https://www.linkedin.com/in/sakthi-balaji-aba317320"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              /in/sakthi-balaji-aba317320
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <a
              href="https://github.com/sakthi301295"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              /sakthi301295
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}