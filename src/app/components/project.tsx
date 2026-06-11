"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Mailwave",
    description: "A sample project description explaining the tools used and a short summary about the project.",
    img: "/projects/mail.webp",
    link:  "https://github.com/sakthi301295/mailwave.git",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "E-commerce Website",
    description:  "A sample project description explaining the tools used and a short summary about the project.",
    img: "/projects/ecommerce-project-management-banner-image.jpg",
    link:"https://github.com/sakthi301295/E-commerce-website.git",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "Digital Twin",
    description: "A task management app with drag & drop and real-time updates.",
    img: "/projects/digitaltwin.jpg",
    link: "https://github.com/sakthi301295/digitalTwin.git",
    tags: ["Vue.js", "Firebase", "Tailwind"],
  },
];

export default function ProjectPage() {
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
          Featured Projects
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-400">Explore my latest work and projects</p>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col transition-all border border-gray-200/50 dark:border-gray-700/50"
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-gray-300 dark:bg-gray-700">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-900 font-bold hover:bg-purple-600 hover:text-white transition"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4 flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
