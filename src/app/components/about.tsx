"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Lightbulb, Globe } from "lucide-react";

const highlights = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Clean Code",
    description: "Writing maintainable, efficient, and well-documented code",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance",
    description: "Building fast, responsive applications that delight users",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "Always exploring new technologies and best practices",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Mindset",
    description: "Creating solutions for diverse users worldwide",
  },
];

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-16"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm <span className="font-bold text-purple-600">Sakthibalaji M</span>, a passionate{" "}
            <span className="font-bold text-blue-600">Full Stack Developer</span> based in India. I specialize in building modern web applications that combine stunning UIs with powerful backend systems.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            With expertise in React, Node.js, and various modern frameworks, I create solutions that are not just functional but also intuitive and scalable. I believe in writing clean, maintainable code and following best practices in every project.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source projects, or sharing knowledge with the developer community. I'm always eager to learn and grow in this ever-evolving tech landscape. 🚀
          </p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transition-all mt-4"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 w-fit mb-4 group-hover:scale-110 transition-transform">
                <div className="text-blue-600 dark:text-blue-400">{item.icon}</div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
