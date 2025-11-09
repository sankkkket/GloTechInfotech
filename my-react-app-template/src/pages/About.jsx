import { useState } from "react";
import { motion } from "framer-motion";
import { 
  PhoneCall, 
  Lightbulb, 
  Handshake, 
  Leaf, 
  Sparkles, 
  ShieldCheck, 
  MessageCircle, 
  X, 
  Phone, 
  Mail, 
  MapPin 
} from "lucide-react";
import aboutImage from "../assets/Images/AboutUS.png";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen bg-[#f8f9fa] px-4 sm:px-6 lg:px-20 py-16 text-[#343a40] relative">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About GloTech Industries</h2>
          <p className="text-[#6c757d] text-base sm:text-lg mb-4 leading-relaxed">
            At GloTech Industries, we believe lighting is more than just illumination —
            it's an expression of space, emotion, and timeless design. Our custom
            lighting solutions are crafted with precision and tailored to reflect
            your unique style.
          </p>
          <p className="text-[#6c757d] text-base sm:text-lg leading-relaxed">
            With a passion for craftsmanship and a focus on detail, we work closely
            with architects, designers, and homeowners to transform visions into
            reality.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            <img
              src={aboutImage}
              alt="About Lumineux"
              className="w-full rounded-xl shadow-md object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#212529]/40 to-transparent rounded-xl"></div>
          </div>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          Our Core Values
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-[#6c757d]">
          {[
            { title: "Craftsmanship", desc: "Every piece is handcrafted with precision and care.", icon: Sparkles },
            { title: "Elegance", desc: "Designs that enhance aesthetics and create ambience.", icon: Lightbulb },
            { title: "Innovation", desc: "Blending traditional artistry with modern technology.", icon: Handshake },
            { title: "Sustainability", desc: "Eco-conscious materials and energy-efficient builds.", icon: Leaf },
            { title: "Collaboration", desc: "Working closely with clients and professionals.", icon: Handshake },
            { title: "Integrity", desc: "Honest service and reliable quality you can trust.", icon: ShieldCheck },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#e9ecef] p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <item.icon className="w-8 h-8 mb-3 text-[#212529]" />
              <h4 className="text-lg font-semibold text-[#212529] mb-2">{item.title}</h4>
              <p className="text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#212529] text-[#f8f9fa] p-10 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Let’s Illuminate Your Vision
          </h3>
          <p className="text-[#dee2e6] mb-6">
            Partner with GloTech Industries to craft lighting solutions that inspire, elevate, 
            and transform your spaces.
          </p>
          <a
            href="tel:+919016979886"
            className="inline-flex items-center gap-2 bg-[#f8f9fa] text-[#212529] px-6 py-3 rounded-md shadow hover:bg-[#dee2e6] transition"
          >
            <PhoneCall className="w-5 h-5" />
            Call Us Now
          </a>
        </motion.div>
      </div>

      {/* ✅ WhatsApp Sticky Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </button>

        {open && (
          <div className="absolute bottom-16 right-0 bg-white text-[#212529] w-72 p-5 rounded-xl shadow-xl border border-[#e9ecef]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Contact Us</h3>
              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5 text-[#6c757d]" />
              </button>
            </div>
            <p className="flex items-center gap-2 text-sm mb-2">
              <Phone className="w-4 h-4" /> +91 90169 79886, +91 63591 76395
            </p>
            <p className="flex items-center gap-2 text-sm mb-2">
              <Mail className="w-4 h-4" /> glotechindustries.offical@gmail.com
            </p>
            <p className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4" /> Plot No. 3, Devam Residency,
              Karadva, Surat, Gujarat, India
            </p>
            <a
              href="https://wa.me/919016979886"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-green-500 text-white text-center py-2.5 rounded-lg hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
