"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold text-purple-600 mb-6">Contact Me</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Let’s connect! Whether you have a project idea, collaboration request, or
        just want to say hi — I’d love to hear from you.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
}
