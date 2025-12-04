"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left space-y-6"
    >
      <h2 className="text-3xl font-bold text-purple-600">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I’m <span className="font-semibold">Sakthibalaji M</span>, a passionate{" "}
        <span className="text-purple-500">Full Stack Developer</span> who enjoys building modern web applications.
        My goal is to craft scalable, user-friendly, and high-performance solutions
        using the latest technologies.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        When I’m not coding, you’ll find me exploring new tools, improving my skills, or
        contributing to open-source projects. 🚀
      </p>
    </motion.div>
  );
}
