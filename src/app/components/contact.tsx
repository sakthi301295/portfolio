"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

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
          Let&apos;s Connect
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I&apos;m always open to new opportunities and exciting ideas. Let&apos;s build something amazing together!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Email */}
          <motion.a
            href="mailto:msbala368@gmail.com"
            whileHover={{ x: 8 }}
            className="group flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-600 transition">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">Email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">msbala368@gmail.com</p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+919876543210"
            whileHover={{ x: 8 }}
            className="group flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-600 transition">
              <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-white transition" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">Phone</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">+91 (Your Number)</p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            whileHover={{ x: 8 }}
            className="group flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="p-3 rounded-lg bg-pink-100 dark:bg-pink-900/30 group-hover:bg-pink-600 transition">
              <MapPin className="w-6 h-6 text-pink-600 dark:text-pink-400 group-hover:text-white transition" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">Location</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">India</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 transition"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 transition"
              />
            </motion.div>
          </div>

          {/* Message Input */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              rows={6}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 transition resize-none"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </motion.button>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-4 rounded-xl bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-300 font-semibold text-center"
            >
              ✅ Message sent successfully! I&apos;ll get back to you soon.
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
}
