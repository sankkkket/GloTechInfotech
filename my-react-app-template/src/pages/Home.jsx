
// import { Link } from "react-router-dom";

// export default function Home() {
//   const products = [
//     {
//       name: "Modern Pendant Light",
//       image: "/images/product1.webp",
//     },
//     {
//       name: "Rustic Chandelier",
//       image: "/images/product2.webp",
//     },
//     {
//       name: "Glass Wall Sconce",
//       image: "/images/product3.webp",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Sneha Patel",
//       feedback: "Lumineux helped us achieve our dream lighting. The craftsmanship is outstanding!",
//     },
//     {
//       name: "Aman Kapoor",
//       feedback: "Their custom light fixture completely transformed our space. Highly recommended!",
//     },
//   ];

//   return (
//     <main className="bg-[#f8f9fa] text-[#343a40]">
//       {/* Hero */}
//       <section
//         className="relative min-h-[85vh] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-16 text-[#f8f9fa]"
//         style={{ backgroundImage: "url(/images/hero-lighting.webp)" }}
//       >
//         <div className="bg-[#212529]/80 backdrop-blur-sm p-6 sm:p-10 rounded-lg text-center max-w-2xl w-full">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 leading-tight">
//             Timeless Custom Lighting
//           </h1>
//           <p className="mb-6 text-sm sm:text-base md:text-lg text-[#ced4da]">
//             Where elegance meets craftsmanship and your vision comes to light.
//           </p>
//           <Link
//             to="/portfolio"
//             className="inline-block bg-[#f8f9fa] text-[#212529] px-6 py-2 rounded-md shadow hover:opacity-90 transition duration-200"
//           >
//             View Portfolio
//           </Link>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-16 px-4 sm:px-6 lg:px-20">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Featured Products</h2>
//         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
//           {products.map((product, idx) => (
//             <div key={idx} className="bg-[#e9ecef] p-4 rounded-lg shadow-sm hover:shadow-md transition">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-60 object-cover rounded"
//               />
//               <h4 className="mt-4 text-lg font-medium text-[#212529] text-center">{product.name}</h4>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <Link
//             to="/products"
//             className="inline-block bg-[#343a40] text-white px-6 py-2 rounded hover:bg-[#212529] transition"
//           >
//             View All Products
//           </Link>
//         </div>
//       </section>

//       {/* Testimonials Preview */}
//       <section className="bg-[#e9ecef] py-16 px-4 sm:px-6 lg:px-20">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">What Clients Say</h2>
//         <div className="grid gap-8 sm:grid-cols-2 max-w-6xl mx-auto">
//           {testimonials.map((t, idx) => (
//             <div key={idx} className="bg-white border border-[#dee2e6] p-6 rounded-lg shadow-sm">
//               <p className="text-sm text-[#6c757d] mb-4">“{t.feedback}”</p>
//               <p className="text-sm font-semibold text-[#212529]">— {t.name}</p>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <Link
//             to="/testimonials"
//             className="inline-block text-sm text-[#343a40] underline hover:text-[#212529]"
//           >
//             Read All Testimonials
//           </Link>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-[#343a40] text-[#f8f9fa] py-16 text-center px-6">
//         <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Ready to Illuminate Your Space?</h2>
//         <p className="mb-6 text-[#ced4da]">Let's create a custom lighting experience just for you.</p>
//         <Link
//           to="/contact"
//           className="inline-block bg-[#f8f9fa] text-[#212529] px-6 py-2 rounded shadow hover:opacity-90 transition"
//         >
//           Contact Us
//         </Link>
//       </section>
//     </main>
//   );
// }
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Hammer,
  Sparkles,
  Users,
  X,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import heroImage from "../assets/Images/Homepage.png";

export default function Hero() {
  const testimonials = [
    {
      name: "Sneha Patel",
      feedback:
        "The chandelier we bought is a masterpiece! It added elegance and warmth to our living room.",
      image: "/images/client1.webp",
    },
    {
      name: "Aman Kapoor",
      feedback:
        "Exceptional craftsmanship and seamless installation. Lumineux made our vision a reality.",
      image: "/images/client2.webp",
    },
    {
      name: "Rohit Sharma",
      feedback:
        "From consultation to delivery, the team was professional and exceeded our expectations.",
      image: "/images/client3.webp",
    },
    {
      name: "Priya Nair",
      feedback:
        "The custom pendant lights completely transformed our dining space. Stunning work!",
      image: "/images/client4.webp",
    },
    {
      name: "Vikram Singh",
      feedback:
        "High-quality materials and unmatched design. Truly timeless lighting solutions!",
      image: "/images/client5.webp",
    },
  ];

  const [index, setIndex] = useState(0);
  const autoSlideRef = useRef(null);

  // ✅ Auto-slide
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(autoSlideRef.current);
  }, [testimonials.length]);

  // ✅ Handle drag/swipe
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      setIndex((prev) => (prev + 1) % testimonials.length);
    } else if (info.offset.x > 50) {
      setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  // ✅ WhatsApp Widget
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[95vh] bg-cover bg-center flex flex-col justify-center px-6 md:px-16 text-[#f8f9fa]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#212529]/90 via-[#212529]/70 to-transparent"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl text-center lg:text-left mb-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-6">
            Illuminate Your Space with <br />
            <span className="font-semibold text-[#f8f9fa]">Custom LED Lights</span>
          </h1>
          <p className="mb-10 text-base sm:text-lg md:text-xl text-[#dee2e6] leading-relaxed">
            Discover high-quality, customizable LED lighting solutions designed
            to enhance any environment. Transform your space with style and
            brilliance that reflects your unique taste.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* <Link
              to="/portfolio"
              className="border border-[#f8f9fa] text-[#f8f9fa] px-6 py-3 rounded-md hover:bg-[#f8f9fa] hover:text-[#212529] transition font-medium"
            >
              View Portfolio
            </Link> */}
            <Link
              to="/portfolio"
              className="bg-[#f8f9fa] text-[#212529] px-6 py-3 rounded-md shadow hover:opacity-90 transition font-medium"
            >
              Explore Products
            </Link>
          </div>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-2xl max-w-3xl mx-auto text-center shadow-lg cursor-grab active:cursor-grabbing"
        >
          <h3 className="text-xl font-semibold text-[#f8f9fa] mb-6 tracking-wide uppercase">
            What Our Clients Say
          </h3>
          <div className="flex flex-col items-center">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-16 h-16 rounded-full object-cover mb-4 border border-[#dee2e6]/50 shadow-md"
              onError={(e) => (e.target.style.display = "none")}
            />
            <p className="text-lg text-[#dee2e6] italic mb-4 leading-relaxed max-w-xl">
              “{testimonials[index].feedback}”
            </p>
            <p className="font-medium text-[#f8f9fa] text-sm tracking-wide">
              — {testimonials[index].name}
            </p>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-[#f8f9fa]" : "bg-[#dee2e6]/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-16 bg-[#f8f9fa] text-[#212529]">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-[#343a40]">GloTechIndustries</span>
          </h2>
          <p className="text-lg text-[#6c757d] max-w-2xl mx-auto leading-relaxed">
            We blend artistry with technology to deliver lighting that inspires.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Shield,
              title: "Trusted Quality",
              desc: "Premium materials and rigorous quality checks for timeless appeal.",
            },
            {
              icon: Hammer,
              title: "Craftsmanship",
              desc: "Handcrafted designs that merge tradition with modern elegance.",
            },
            {
              icon: Sparkles,
              title: "Customization",
              desc: "Bespoke lighting tailored to your space and personality.",
            },
            {
              icon: Users,
              title: "Client First",
              desc: "A seamless experience from consultation to installation.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <Icon className="w-12 h-12 text-[#343a40] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-[#6c757d] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action Section */}
      {/* <section className="bg-[#212529] text-[#f8f9fa] py-16 px-6 md:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Have a project in mind?
          </h2>
          <p className="text-[#adb5bd] mb-8 text-lg leading-relaxed">
            Let’s create lighting that reflects your style and transforms your
            space. Reach out today and our team will guide you.
          </p>

          <a
            href="tel:+919016979886"
            className="inline-flex items-center gap-3 bg-[#f8f9fa] text-[#212529] px-8 py-4 rounded-full shadow hover:opacity-90 transition text-lg font-medium"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </a>
        </motion.div>
      </section> */}

      {/* Call To Action Section */}
<section className="bg-[#f8f9fa] text-[#212529] py-16 px-6 md:px-16 text-center">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="max-w-3xl mx-auto"
  >
    <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
      Have a project in mind?
    </h2>
    <p className="text-[#6c757d] mb-8 text-lg leading-relaxed">
      Let’s create lighting that reflects your style and transforms your
      space. Reach out today and our team will guide you.
    </p>

    <a
      href="tel:+919016979886"
      className="inline-flex items-center gap-3 bg-[#212529] text-[#f8f9fa] px-8 py-4 rounded-full shadow hover:bg-[#343a40] transition text-lg font-medium"
    >
      <Phone className="w-5 h-5" />
      Call Us Now
    </a>
  </motion.div>
</section>


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
    </>
  );
}
