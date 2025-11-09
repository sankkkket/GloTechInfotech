import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] bg-cover bg-center flex items-center justify-center px-4 sm:px-8 md:px-16 text-[#f8f9fa]"
      style={{ backgroundImage: "url(/images/hero-lighting.webp)" }} // use optimized .webp
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#212529]/70 to-[#000]/80" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-[#212529]/60 backdrop-blur-sm p-6 sm:p-10 rounded-lg text-center max-w-2xl w-full"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold mb-4 leading-tight text-[#f8f9fa]"
        >
          Timeless Custom Lighting
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 text-base sm:text-lg md:text-xl text-[#dee2e6]"
        >
          Where elegance meets craftsmanship and your vision comes to light.
        </motion.p>

        {/* Call-to-Actions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            to="/portfolio"
            className="bg-[#f8f9fa] text-[#212529] px-6 py-2 rounded-md shadow hover:opacity-90 transition duration-200"
          >
            View Portfolio
          </Link>
          <Link
            to="/contact"
            className="bg-[#343a40] text-[#f8f9fa] px-6 py-2 rounded-md shadow hover:opacity-80 transition duration-200"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
