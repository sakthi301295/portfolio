"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutPage from "./components/about";
import TechPage from "./components/tech";
import ProjectPage from "./components/project";
import ContactPage from "./components/contact";
import { Mail, Linkedin, Github, ChevronDown, Sparkles } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navItems = ["Home", "About", "Tech", "Projects", "Contact"];

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.toLowerCase());
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950 text-gray-900 dark:text-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse delay-4000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white/80 dark:bg-slate-900/80 shadow-lg backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo with Icon */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-6 h-6 text-purple-600" />
            Sakthibalaji
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`relative transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? "text-purple-600"
                    : "hover:text-purple-600 text-gray-700 dark:text-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full right-6 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-4 md:hidden border border-gray-200 dark:border-gray-700"
            >
              <ul className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full px-6 max-w-6xl mt-[100px] mb-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 pt-20"
      >
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-left space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-600 dark:text-blue-400 font-semibold text-lg flex items-center gap-2"
            >
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
              Welcome to my portfolio
            </motion.p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, I&apos;m Sakthibalaji
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-semibold">
              Full Stack Developer & Creative Problem Solver
            </p>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
            I craft modern, scalable web applications with cutting-edge technologies. Passionate about clean code, stunning UIs, and solving real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all text-center"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-bold hover:bg-purple-600 hover:text-white transition-all text-center"
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-300 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 font-medium">Follow me:</p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/sakthi301295"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-purple-600 hover:text-white transition"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sakthi-balaji-dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-blue-600 hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:msbala368@gmail.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-pink-600 hover:text-white transition"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

            {/* Image Container */}
            <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-2 shadow-2xl">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/profile/avatar.png"
                  width={300}
                  height={300}
                  alt="Profile Picture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-purple-600 dark:text-purple-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full px-6 py-24 max-w-6xl">
        <AboutPage />
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech"
        className="w-full px-6 py-24 max-w-6xl"
      >
        <TechPage />
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full px-6 py-24 max-w-6xl">
        <ProjectPage />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full px-6 py-24 max-w-6xl"
      >
        <ContactPage />
      </section>

      {/* Footer */}
      <footer className="w-full py-12 mt-24 text-center text-gray-600 dark:text-gray-400 border-t border-gray-300/50 dark:border-gray-700/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-semibold mb-4">
            © {new Date().getFullYear()} Sakthibalaji M • Crafted with passion
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <motion.a
              href="mailto:msbala368@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 hover:text-purple-600 transition"
            >
              <Mail className="w-5 h-5" />
              <span>msbala368@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sakthi-balaji-dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/sakthi301295"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 transition"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>
          </div>

          <p className="text-sm">All rights reserved • Made with ❤️</p>
        </div>
      </footer>
    </main>
  );
}