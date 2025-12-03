"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: "Databases", icon: <FaDatabase className="text-purple-500 text-4xl" /> },
];

export default function TechPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-purple-600 mb-8">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {skill.icon}
            <p className="text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
