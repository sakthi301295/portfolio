"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Neobone",
    description: "A sample project description explaining the tools used and a short summary about the project.",
    img: "/projects/bg3.png",
    link:  "https://github.com/sakthi301295/neobone?tab=readme-ov-file#neobone",
  },
  {
    title: "Ruchera",
    description:  "A sample project description explaining the tools used and a short summary about the project.",
    img: "/projects/image2.png",
    link:"https://github.com/sakthi301295/Ruchera#ruchera",
  },
  {
    title: "3D Animation",
    description: "A task management app with drag & drop and real-time updates.",
    img: "/projects/image3.png",
    link: "https://github.com/sakthi301295/my-threejs-project#my-threejs-project",
  },
];

export default function ProjectPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-purple-600 text-center mb-12">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <Image
              src={project.img}
              alt={project.title}
              width={400}
              height={200}
              className="object-cover h-48 w-full"
            />
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {project.description}
              </p>
              <a
                href={project.link}
                className="mt-auto inline-block px-4 py-2 text-sm font-medium bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
