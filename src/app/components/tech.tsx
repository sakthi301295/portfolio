"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGit, FaDocker } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact className="text-5xl" />, color: "from-blue-400 to-blue-600" },
  { name: "Node.js", icon: <FaNodeJs className="text-5xl" />, color: "from-green-400 to-green-600" },
  { name: "JavaScript", icon: <FaJs className="text-5xl" />, color: "from-yellow-400 to-yellow-600" },
  { name: "HTML5", icon: <FaHtml5 className="text-5xl" />, color: "from-orange-400 to-orange-600" },
  { name: "CSS3", icon: <FaCss3Alt className="text-5xl" />, color: "from-blue-400 to-cyan-600" },
  { name: "Databases", icon: <FaDatabase className="text-5xl" />, color: "from-purple-400 to-purple-600" },
  { name: "Git", icon: <FaGit className="text-5xl" />, color: "from-red-400 to-red-600" },
  { name: "Docker", icon: <FaDocker className="text-5xl" />, color: "from-cyan-400 to-blue-600" },
];

export default function TechPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-12"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-400">Technologies & Tools I Work With</p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -12, scale: 1.05 }}
            className={`group relative p-6 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 shadow-lg hover:shadow-2xl transition-all
            before:absolute before:inset-0 before:bg-white before:dark:bg-slate-800 before:rounded-2xl before:opacity-0 before:group-hover:opacity-100 before:transition before:z-0
            flex flex-col items-center gap-4 cursor-pointer overflow-hidden"`}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition z-0`}></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className={`text-${skill.color.split('-')[1]}-600 group-hover:scale-125 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <p className="text-lg font-bold text-center text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                {skill.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
