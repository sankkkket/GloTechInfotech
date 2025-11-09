  // import { useState } from "react";
  // import { motion, AnimatePresence } from "framer-motion";
  // import { ChevronLeft, ChevronRight } from "lucide-react";

  // export default function Testimonials() {
  //   const testimonials = [
  //     {
  //       name: "Sneha Patel",
  //       role: "Interior Designer, Mumbai",
  //       feedback:
  //         "Lumineux added life to my client's living room. Their work is detailed, elegant, and totally custom.",
  //     },
  //     {
  //       name: "Aman Kapoor",
  //       role: "Architect, Delhi",
  //       feedback:
  //         "The perfect lighting partner. I trust Lumineux for every premium project — precise and professional.",
  //     },
  //     {
  //       name: "Ritika Mehra",
  //       role: "Boutique Hotel Owner",
  //       feedback:
  //         "Our hotel lobby lighting turned out breathtaking. Guests keep asking who designed it!",
  //     },
  //   ];

  //   const [index, setIndex] = useState(0);

  //   const next = () => setIndex((index + 1) % testimonials.length);
  //   const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  //   return (
  //     <section className="min-h-screen bg-[#f8f9fa] px-4 sm:px-6 lg:px-20 py-20 text-[#343a40] flex items-center">
  //       <div className="max-w-4xl mx-auto text-center">
  //         <h2 className="text-4xl sm:text-5xl font-bold mb-14 tracking-tight">
  //           What Our Clients Say
  //         </h2>

  //         <div className="relative bg-[#ffffff] border border-[#dee2e6] p-10 rounded-2xl shadow-md">
  //           <AnimatePresence mode="wait">
  //             <motion.div
  //               key={index}
  //               initial={{ opacity: 0, y: 20 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               exit={{ opacity: 0, y: -20 }}
  //               transition={{ duration: 0.5 }}
  //             >
  //               <p className="text-xl text-[#495057] italic leading-relaxed mb-8">
  //                 “{testimonials[index].feedback}”
  //               </p>
  //               <p className="text-lg font-semibold text-[#212529]">
  //                 — {testimonials[index].name}
  //               </p>
  //               <p className="text-sm text-[#6c757d]">{testimonials[index].role}</p>
  //             </motion.div>
  //           </AnimatePresence>

  //           {/* Arrows */}
  //           <button
  //             onClick={prev}
  //             className="absolute top-1/2 -translate-y-1/2 left-4 bg-[#f1f3f5] hover:bg-[#e9ecef] p-3 rounded-full shadow transition"
  //             aria-label="Previous"
  //           >
  //             <ChevronLeft className="w-5 h-5 text-[#495057]" />
  //           </button>
  //           <button
  //             onClick={next}
  //             className="absolute top-1/2 -translate-y-1/2 right-4 bg-[#f1f3f5] hover:bg-[#e9ecef] p-3 rounded-full shadow transition"
  //             aria-label="Next"
  //           >
  //             <ChevronRight className="w-5 h-5 text-[#495057]" />
  //           </button>
  //         </div>

  //         {/* Dots */}
  //         <div className="flex justify-center mt-8 gap-3">
  //           {testimonials.map((_, i) => (
  //             <motion.span
  //               key={i}
  //               className={`w-3 h-3 rounded-full cursor-pointer ${
  //                 i === index ? "bg-[#212529]" : "bg-[#dee2e6]"
  //               }`}
  //               onClick={() => setIndex(i)}
  //               whileHover={{ scale: 1.2 }}
  //               whileTap={{ scale: 0.9 }}
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sneha Patel",
      role: "Interior Designer, Mumbai",
      feedback:
        "GloTechIndustries transformed my client’s living room with beautiful ambient lighting. Absolutely stunning results!",
    },
    {
      name: "Aman Kapoor",
      role: "Architect, Delhi",
      feedback:
        "The perfect lighting partner. GloTechIndustries always delivers modern, durable, and elegant solutions.",
    },
    {
      name: "Ritika Mehra",
      role: "Boutique Hotel Owner",
      feedback:
        "Our hotel’s lobby now has a luxurious atmosphere. Guests often compliment the lighting setup!",
    },
    {
      name: "Rahul Verma",
      role: "Restaurant Owner, Pune",
      feedback:
        "They understood exactly what vibe I wanted. The lighting completely elevated our restaurant’s ambiance.",
    },
    {
      name: "Anjali Sharma",
      role: "Homeowner, Bangalore",
      feedback:
        "Superb team! They customized everything according to my interiors. Highly recommend GloTechIndustries.",
    },
    {
      name: "Mohit Sinha",
      role: "Real Estate Developer, Noida",
      feedback:
        "Professional, timely, and creative. GloTechIndustries is now my go-to team for all upcoming projects.",
    },
    {
      name: "Karan Bedi",
      role: "Event Manager, Chandigarh",
      feedback:
        "We collaborated for a wedding event setup. The lighting made the venue look magical — truly remarkable work.",
    },
    {
      name: "Priya Das",
      role: "Spa Owner, Goa",
      feedback:
        "Loved the calming and warm lighting concept they created for our spa. Clients are more relaxed than ever!",
    },
    {
      name: "Neha Joshi",
      role: "Fashion Studio Owner",
      feedback:
        "Perfectly highlighted my clothing displays. Their lighting brings out every color vibrantly.",
    },
    {
      name: "Arjun Nair",
      role: "Cafe Owner, Kochi",
      feedback:
        "Simple process, quick installation, and premium finish. GloTechIndustries nailed it!",
    },
  ];

  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentTestimonials = testimonials.slice(start, end);

  return (
    <section className="bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] px-4 sm:px-6 lg:px-20 py-20 text-[#343a40]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-14 tracking-tight">
          What Our Clients Say
        </h2>

        {/* Desktop Carousel */}
        <div className="hidden sm:block">
          <div className="relative bg-[#ffffff] border border-[#dee2e6] p-10 rounded-2xl shadow-md min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl text-[#495057] italic leading-relaxed mb-8">
                  “{testimonials[index].feedback}”
                </p>
                <p className="text-lg font-semibold text-[#212529]">
                  — {testimonials[index].name}
                </p>
                <p className="text-sm text-[#6c757d]">{testimonials[index].role}</p>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute top-1/2 -translate-y-1/2 left-4 bg-[#f1f3f5] hover:bg-[#e9ecef] p-3 rounded-full shadow transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-[#495057]" />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 -translate-y-1/2 right-4 bg-[#f1f3f5] hover:bg-[#e9ecef] p-3 rounded-full shadow transition"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-[#495057]" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, i) => (
              <motion.span
                key={i}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === index ? "bg-[#212529]" : "bg-[#dee2e6]"
                }`}
                onClick={() => setIndex(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Mobile List View with Pagination */}
        <div className="block sm:hidden space-y-6">
          {currentTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-[#dee2e6] rounded-xl p-6 shadow-sm text-left"
            >
              <p className="text-[#495057] italic mb-4 text-base leading-relaxed">
                “{t.feedback}”
              </p>
              <p className="text-[#212529] font-semibold">{t.name}</p>
              <p className="text-[#6c757d] text-sm">{t.role}</p>
            </motion.div>
          ))}

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className={`px-4 py-2 rounded-lg border border-[#dee2e6] text-[#212529] text-sm font-medium transition ${
                page === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-[#e9ecef]"
              }`}
            >
              Previous
            </button>
            <span className="text-[#6c757d] text-sm">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className={`px-4 py-2 rounded-lg border border-[#dee2e6] text-[#212529] text-sm font-medium transition ${
                page === totalPages
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-[#e9ecef]"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Footer Tagline */}
      <div className="text-center mt-16 text-[#6c757d] text-sm">
        <p>
          Lighting Innovation by{" "}
          <span className="font-semibold text-[#212529]">GloTechIndustries</span>
        </p>
        <p className="mt-1">— Crafting Light. Creating Experiences. —</p>
      </div>
    </section>
  );
}
