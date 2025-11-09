// import { useState } from "react";
// import { motion } from "framer-motion";
// import { MessageCircle, X, Phone, Mail, MapPin } from "lucide-react";

// import heroImage from "../assets/Images/img.webp";
// import heroImage1 from "../assets/Images/Circle.jpg";
// import heroImage2 from "../assets/Images/DASA Design.jpg";
// import heroImage3 from "../assets/Images/Honeycomb.jpg";
// import heroImage4 from "../assets/Images/Round Ring.jpg";
// import heroImage5 from "../assets/Images/S Bending profile.jpg";

// export default function Portfolio() {
//   const [open, setOpen] = useState(false);

//   const projects = [
//     { title: "Luxury Dining Room", image: heroImage1 },
//     { title: "Boutique Hotel Lobby", image: heroImage2 },
//     { title: "Contemporary Workspace", image: heroImage3 },
//     { title: "Minimalist Bedroom Setup", image: heroImage4 },
//     { title: "Rustic Living Room", image: heroImage5 },
//     { title: "Custom Entryway Chandelier", image: heroImage },
//   ];

//   return (
//     <section className="min-h-screen bg-[#f8f9fa] px-4 sm:px-6 lg:px-20 py-16 text-[#343a40] relative">
//       {/* Heading */}
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Products</h2>
//         <p className="text-[#6c757d] text-base sm:text-lg">
//           Explore some of our signature projects across residential, commercial, and hospitality spaces.
//         </p>
//       </div>

//       {/* Project Grid */}
//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="relative group bg-[#e9ecef] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
//             />

//             {/* Desktop hover overlay */}
//             <div className="absolute inset-0 bg-[#212529]/50 opacity-0 group-hover:opacity-100 transition hidden md:flex items-center justify-center">
//               <h4 className="text-lg font-semibold text-white">{project.title}</h4>
//             </div>

//             {/* Mobile always visible title */}
//             <div className="md:hidden p-3 text-center bg-white">
//               <h4 className="text-base font-medium text-[#212529]">{project.title}</h4>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* ✅ WhatsApp Sticky Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button
//           onClick={() => setOpen(!open)}
//           className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition flex items-center justify-center"
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>

//         {open && (
//           <div className="absolute bottom-16 right-0 bg-white text-[#212529] w-72 p-5 rounded-xl shadow-xl border border-[#e9ecef]">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-semibold text-lg">Contact Us</h3>
//               <button onClick={() => setOpen(false)}>
//                 <X className="w-5 h-5 text-[#6c757d]" />
//               </button>
//             </div>
//             <p className="flex items-center gap-2 text-sm mb-2">
//               <Phone className="w-4 h-4" /> +91 90169 79886, +91 63591 76395
//             </p>
//             <p className="flex items-center gap-2 text-sm mb-2">
//               <Mail className="w-4 h-4" /> glotechindustries.offical@gmail.com
//             </p>
//             <p className="flex items-center gap-2 text-sm">
//               <MapPin className="w-4 h-4" /> Plot No. 3, Devam Residency, Karadva, Surat, Gujarat, India
//             </p>
//             <a
//               href="https://wa.me/919016979886"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block mt-4 bg-green-500 text-white text-center py-2.5 rounded-lg hover:bg-green-600 transition"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MessageCircle, X, Phone, Mail, MapPin } from "lucide-react";

// // Import images
// import Metallic56 from "../assets/Images/img.webp";
// import Metallic57 from "../assets/Images/Circle.jpg";
// import Metallic58 from "../assets/Images/DASA Design.jpg";
// import Metallic59 from "../assets/Images/Honeycomb.jpg";
// import Metallic60 from "../assets/Images/Round Ring.jpg";
// import Metallic61 from "../assets/Images/S Bending profile.jpg";
// import Metallic1 from "../assets/Images/Metallic - 1.jpg";
// import Metallic2 from "../assets/Images/Metallic - 2.jpg";
// import Metallic3 from "../assets/Images/Metallic - 3.jpg";
// import Metallic4 from "../assets/Images/Metallic- 4.jpg";
// import Metallic5 from "../assets/Images/Metallic - 5.jpg";
// import Metallic6 from "../assets/Images/Metallic - 6.jpg";
// import Metallic7 from "../assets/Images/Metallic - 7.jpg";
// import Metallic8 from "../assets/Images/Metallic - 8.jpg";
// import Metallic9 from "../assets/Images/Metallic - 9.jpg";
// import Metallic10 from "../assets/Images/Metallic - 10.jpg";
// import Metallic11 from "../assets/Images/Metallic - 11.jpg";
// import Metallic12 from "../assets/Images/Metallic 12.jpg";
// import Metallic13 from "../assets/Images/Metallic - 13.jpg";
// import Metallic14 from "../assets/Images/Metallic - 14.jpg";
// import Metallic15 from "../assets/Images/Metallic - 15.jpg";
// import Metallic16 from "../assets/Images/Metallic - 16.jpg";
// import Metallic17 from "../assets/Images/Metallic - 17.jpg";
// import Metallic18 from "../assets/Images/Metallic - 18.jpg";
// import Metallic19 from "../assets/Images/Metallic - 19.jpg";
// import Metallic20 from "../assets/Images/Metallic - 20.jpg";
// import Metallic21 from "../assets/Images/Metallic - 21.jpg";
// import Metallic22 from "../assets/Images/Metallic - 22.jpg";
// import Metallic23 from "../assets/Images/Metallic - 23.jpg";
// import Metallic24 from "../assets/Images/Metallic - 24.jpg";
// import Metallic25 from "../assets/Images/Metallic - 25.jpg";
// import Metallic26 from "../assets/Images/Metallic - 26.jpg";
// import Metallic27 from "../assets/Images/Metallic - 27.jpg";
// import Metallic28 from "../assets/Images/Metallic - 28.jpg";
// import Metallic29 from "../assets/Images/Metallic - 29.jpg";
// import Metallic30 from "../assets/Images/Metallic - 30.jpg";
// import Metallic31 from "../assets/Images/Metallic - 31.jpg";
// import Metallic32 from "../assets/Images/Metallic - 32.jpg";
// import Metallic33 from "../assets/Images/Metallic - 33.jpg";
// import Metallic34 from "../assets/Images/Metallic - 34.jpg";
// import Metallic35 from "../assets/Images/Metallic - 35.jpg";
// import Metallic36 from "../assets/Images/Metallic - 36.jpg";
// import Metallic37 from "../assets/Images/Metallic - 37.jpg";
// import Metallic38 from "../assets/Images/Metallic - 38.jpg";
// import Metallic39 from "../assets/Images/Metallic - 39.jpg";
// import Metallic40 from "../assets/Images/Metallic - 40.jpg";
// import Metallic41 from "../assets/Images/Metallic - 41.jpg";
// import Metallic42 from "../assets/Images/Metallic - 42.jpg";
// import Metallic43 from "../assets/Images/Metallic - 43.jpg";
// import Metallic44 from "../assets/Images/Metallic - 44.jpg";
// import Metallic45 from "../assets/Images/Metallic - 45.jpg";
// import Metallic46 from "../assets/Images/Metallic - 46.jpg";
// import Metallic47 from "../assets/Images/Metallic - 47.jpg";
// import Metallic48 from "../assets/Images/Metallic - 48.jpg";
// import Metallic49 from "../assets/Images/Metallic - 49.jpg";
// import Metallic50 from "../assets/Images/Metallic - 50.jpg";
// import Metallic51 from "../assets/Images/Metallic - 51.jpg";
// import Metallic52 from "../assets/Images/Metallic - 52.jpg";
// import Metallic53 from "../assets/Images/Metallic - 53.jpg";
// import Metallic54 from "../assets/Images/Metallic - 54.jpg";
// import Metallic55 from "../assets/Images/Metallic - 55.jpg";
// import Wooden1 from "../assets/Images/Wooden - 1.jpg";
// import Wooden2 from "../assets/Images/Wooden - 2.jpg";
// import Wooden3 from "../assets/Images/Wooden - 3.jpg";
// import Wooden4 from "../assets/Images/Wooden - 4.jpg";
// import Wooden5 from "../assets/Images/Wooden - 5.jpg";
// import Wooden6 from "../assets/Images/Wooden - 6.jpg";
// import Wooden7 from "../assets/Images/Wooden - 7.jpg";
// import Wooden8 from "../assets/Images/Wooden - 8.jpg";
// import Wooden9 from "../assets/Images/Wooden - 9.jpg";
// import Wooden10 from "../assets/Images/Wooden - 10.jpg";
// import Wooden11 from "../assets/Images/Wooden - 11.jpg";
// import Wooden12 from "../assets/Images/Wooden - 12.jpg";
// import Wooden13 from "../assets/Images/Wooden - 13.jpg";
// import Wooden14 from "../assets/Images/Wooden - 14.jpg";
// import Wooden15 from "../assets/Images/Wooden -15.jpg";
// import Wooden16 from "../assets/Images/Wooden - 16.jpg";
// import Wooden17 from "../assets/Images/Wooden - 17.jpg";
// import Wooden18 from "../assets/Images/Wooden - 18.jpg";
// import Wooden19 from "../assets/Images/Wooden - 19.jpg";
// import Wooden20 from "../assets/Images/Wooden - 20.jpg";
// import Wooden21 from "../assets/Images/Wooden - 21.jpg";
// import Wooden22 from "../assets/Images/wooden - 22.jpg";
// import Wooden23 from "../assets/Images/Wooden - 23.jpg";
// import Wooden24 from "../assets/Images/Wooden - 24.jpg";
// import Wooden25 from "../assets/Images/Wooden - 25.jpg";
// import Wooden26 from "../assets/Images/Wooden - 26.jpg";
// import Wooden27 from "../assets/Images/Wooden - 27.jpg";
// import Wooden28 from "../assets/Images/Wooden - 28.jpg";
// import Wooden29 from "../assets/Images/Wooden - 29.jpg";
// import Wooden30 from "../assets/Images/Wooden - 30.jpg";


// export default function Portfolio() {
//   const [open, setOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("Metallic");
//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 6;

//   const projects = [
//     { title: "", image: Metallic1, category: "Metallic" },
//     { title: "", image: Metallic57, category: "Metallic" },
//     { title: "", image: Metallic58, category: "Metallic" },
//     { title: "", image: Metallic59, category: "Metallic" },
//     { title: "", image: Metallic60, category: "Metallic" },
//     { title: "", image: Metallic61, category: "Metallic" },
//     { title: "", image: Metallic56, category: "Wooden" },
//     // Extra examples for pagination
//     { title: "", image: Metallic58, category: "Metallic" },
//     { title: "", image: Metallic59, category: "Wooden" },
//     { title: "", image: Metallic60, category: "Metallic" },
//     { title: "", image: Metallic61, category: "Wooden" },
//   ];

//   // Filter projects by selected category
//   const filteredProjects = projects.filter(
//     (project) => project.category === selectedCategory
//   );

//   // Pagination logic
//   const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentProjects = filteredProjects.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//       window.scrollTo({ top: 200, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="min-h-screen bg-[#f8f9fa] px-4 sm:px-6 lg:px-20 py-16 text-[#343a40] relative">
//       {/* Heading */}
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Products</h2>
//         <p className="text-[#6c757d] text-base sm:text-lg mb-6">
//           Explore our exclusive range of lighting designs tailored for your space.
//         </p>

//         {/* Category Buttons */}
//         <div className="flex justify-center gap-4 flex-wrap">
//           {["Metallic", "Wooden"].map((category) => (
//             <button
//               key={category}
//               onClick={() => {
//                 setSelectedCategory(category);
//                 setCurrentPage(1);
//               }}
//               className={`px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
//                 selectedCategory === category
//                   ? "bg-[#212529] text-[#f8f9fa]"
//                   : "bg-[#dee2e6] text-[#212529] hover:bg-[#adb5bd]"
//               }`}
//             >
//               {category} Lights
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Project Grid */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={selectedCategory + currentPage}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -30 }}
//           transition={{ duration: 0.4 }}
//           className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
//         >
//           {currentProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               className="relative group bg-[#e9ecef] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
//               />

//               {/* Desktop hover overlay */}
//               <div className="absolute inset-0 bg-[#212529]/50 opacity-0 group-hover:opacity-100 transition hidden md:flex items-center justify-center">
//                 <h4 className="text-lg font-semibold text-white">{project.title}</h4>
//               </div>

//               {/* Mobile always visible title */}
//               <div className="md:hidden p-3 text-center bg-white">
//                 <h4 className="text-base font-medium text-[#212529]">
//                   {project.title}
//                 </h4>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </AnimatePresence>

//       {/* Pagination Controls */}
//       {totalPages > 1 && (
//         <div className="flex justify-center mt-12 gap-3">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className={`px-4 py-2 rounded-lg font-medium transition ${
//               currentPage === 1
//                 ? "bg-[#dee2e6] text-[#6c757d] cursor-not-allowed"
//                 : "bg-[#212529] text-[#f8f9fa] hover:opacity-90"
//             }`}
//           >
//             Prev
//           </button>

//           {[...Array(totalPages)].map((_, i) => (
//             <button
//               key={i}
//               onClick={() => handlePageChange(i + 1)}
//               className={`px-4 py-2 rounded-lg font-medium ${
//                 currentPage === i + 1
//                   ? "bg-[#212529] text-[#f8f9fa]"
//                   : "bg-[#dee2e6] text-[#212529] hover:bg-[#adb5bd]"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}

//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className={`px-4 py-2 rounded-lg font-medium transition ${
//               currentPage === totalPages
//                 ? "bg-[#dee2e6] text-[#6c757d] cursor-not-allowed"
//                 : "bg-[#212529] text-[#f8f9fa] hover:opacity-90"
//             }`}
//           >
//             Next
//           </button>
//         </div>
//       )}

//       {/* ✅ WhatsApp Sticky Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button
//           onClick={() => setOpen(!open)}
//           className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition flex items-center justify-center"
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>

//         {open && (
//           <div className="absolute bottom-16 right-0 bg-white text-[#212529] w-72 p-5 rounded-xl shadow-xl border border-[#e9ecef]">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-semibold text-lg">Contact Us</h3>
//               <button onClick={() => setOpen(false)}>
//                 <X className="w-5 h-5 text-[#6c757d]" />
//               </button>
//             </div>
//             <p className="flex items-center gap-2 text-sm mb-2">
//               <Phone className="w-4 h-4" /> +91 90169 79886, +91 63591 76395
//             </p>
//             <p className="flex items-center gap-2 text-sm mb-2">
//               <Mail className="w-4 h-4" /> glotechindustries.offical@gmail.com
//             </p>
//             <p className="flex items-center gap-2 text-sm">
//               <MapPin className="w-4 h-4" /> Plot No. 3, Devam Residency, Karadva, Surat, Gujarat, India
//             </p>
//             <a
//               href="https://wa.me/919016979886"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block mt-4 bg-green-500 text-white text-center py-2.5 rounded-lg hover:bg-green-600 transition"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail, MapPin } from "lucide-react";

// Import images
import Metallic56 from "../assets/Images/img.webp";
import Metallic57 from "../assets/Images/Circle.jpg";
import Metallic58 from "../assets/Images/DASA Design.jpg";
import Metallic59 from "../assets/Images/Honeycomb.jpg";
import Metallic60 from "../assets/Images/Round Ring.jpg";
import Metallic61 from "../assets/Images/S Bending profile.jpg";
import Metallic1 from "../assets/Images/Metallic - 1.jpg";
import Metallic2 from "../assets/Images/Metallic - 2.jpg";
import Metallic3 from "../assets/Images/Metallic - 3.jpg";
import Metallic4 from "../assets/Images/Metallic- 4.jpg";
import Metallic5 from "../assets/Images/Metallic - 5.jpg";
import Metallic6 from "../assets/Images/Metallic - 6.jpg";
import Metallic7 from "../assets/Images/Metallic - 7.jpg";
import Metallic8 from "../assets/Images/Metallic - 8.jpg";
import Metallic9 from "../assets/Images/Metallic - 9.jpg";
import Metallic10 from "../assets/Images/Metallic - 10.jpg";
import Metallic11 from "../assets/Images/Metallic - 11.jpg";
import Metallic12 from "../assets/Images/Metallic 12.jpg";
import Metallic13 from "../assets/Images/Metallic - 13.jpg";
import Metallic14 from "../assets/Images/Metallic - 14.jpg";
import Metallic15 from "../assets/Images/Metallic - 15.jpg";
import Metallic16 from "../assets/Images/Metallic - 16.jpg";
import Metallic17 from "../assets/Images/Metallic - 17.jpg";
import Metallic18 from "../assets/Images/Metallic - 18.jpg";
import Metallic19 from "../assets/Images/Metallic - 19.jpg";
import Metallic20 from "../assets/Images/Metallic - 20.jpg";
import Metallic21 from "../assets/Images/Metallic - 21.jpg";
import Metallic22 from "../assets/Images/Metallic - 22.jpg";
import Metallic23 from "../assets/Images/Metallic - 23.jpg";
import Metallic24 from "../assets/Images/Metallic - 24.jpg";
import Metallic25 from "../assets/Images/Metallic - 25.jpg";
import Metallic26 from "../assets/Images/Metallic - 26.jpg";
import Metallic27 from "../assets/Images/Metallic - 27.jpg";
import Metallic28 from "../assets/Images/Metallic - 28.jpg";
import Metallic29 from "../assets/Images/Metallic - 29.jpg";
import Metallic30 from "../assets/Images/Metallic - 30.jpg";
import Metallic31 from "../assets/Images/Metallic - 31.jpg";
import Metallic32 from "../assets/Images/Metallic - 32.jpg";
import Metallic33 from "../assets/Images/Metallic - 33.jpg";
import Metallic34 from "../assets/Images/Metallic - 34.jpg";
import Metallic35 from "../assets/Images/Metallic - 35.jpg";
import Metallic36 from "../assets/Images/Metallic - 36.jpg";
import Metallic37 from "../assets/Images/Metallic - 37.jpg";
import Metallic38 from "../assets/Images/Metallic - 38.jpg";
import Metallic39 from "../assets/Images/Metallic - 39.jpg";
import Metallic40 from "../assets/Images/Metallic - 40.jpg";
import Metallic41 from "../assets/Images/Metallic - 41.jpg";
import Metallic42 from "../assets/Images/Metallic - 42.jpg";
import Metallic43 from "../assets/Images/Metallic - 43.jpg";
import Metallic44 from "../assets/Images/Metallic - 44.jpg";
import Metallic45 from "../assets/Images/Metallic - 45.jpg";
import Metallic46 from "../assets/Images/Metallic - 46.jpg";
import Metallic47 from "../assets/Images/Metallic - 47.jpg";
import Metallic48 from "../assets/Images/Metallic - 48.jpg";
import Metallic49 from "../assets/Images/Metallic - 49.jpg";
import Metallic50 from "../assets/Images/Metallic - 50.jpg";
import Metallic51 from "../assets/Images/Metallic - 51.jpg";
import Metallic52 from "../assets/Images/Metallic - 52.jpg";
import Metallic53 from "../assets/Images/Metallic - 53.jpg";
import Metallic54 from "../assets/Images/Metallic - 54.jpg";
import Metallic55 from "../assets/Images/Metallic - 55.jpg";
import Wooden1 from "../assets/Images/Wooden - 1.jpg";
import Wooden2 from "../assets/Images/Wooden - 2.jpg";
import Wooden3 from "../assets/Images/Wooden - 3.jpg";
import Wooden4 from "../assets/Images/Wooden - 4.jpg";
import Wooden5 from "../assets/Images/Wooden - 5.jpg";
import Wooden6 from "../assets/Images/Wooden - 6.jpg";
import Wooden7 from "../assets/Images/Wooden - 7.jpg";
import Wooden8 from "../assets/Images/Wooden - 8.jpg";
import Wooden9 from "../assets/Images/Wooden - 9.jpg";
import Wooden10 from "../assets/Images/Wooden - 10.jpg";
import Wooden11 from "../assets/Images/Wooden - 11.jpg";
import Wooden12 from "../assets/Images/Wooden - 12.jpg";
import Wooden13 from "../assets/Images/Wooden - 13.jpg";
import Wooden14 from "../assets/Images/Wooden - 14.jpg";
import Wooden15 from "../assets/Images/Wooden -15.jpg";
import Wooden16 from "../assets/Images/Wooden - 16.jpg";
import Wooden17 from "../assets/Images/Wooden - 17.jpg";
import Wooden18 from "../assets/Images/Wooden - 18.jpg";
import Wooden19 from "../assets/Images/Wooden - 19.jpg";
import Wooden20 from "../assets/Images/Wooden - 20.jpg";
import Wooden21 from "../assets/Images/Wooden - 21.jpg";
import Wooden22 from "../assets/Images/wooden - 22.jpg";
import Wooden23 from "../assets/Images/Wooden - 23.jpg";
import Wooden24 from "../assets/Images/Wooden - 24.jpg";
import Wooden25 from "../assets/Images/Wooden - 25.jpg";
import Wooden26 from "../assets/Images/Wooden - 26.jpg";
import Wooden27 from "../assets/Images/Wooden - 27.jpg";
import Wooden28 from "../assets/Images/Wooden - 28.jpg";
import Wooden29 from "../assets/Images/Wooden - 29.jpg";
import Wooden30 from "../assets/Images/Wooden - 30.jpg";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Metallic");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // ✅ All 91 images added below
  const metallicImages = [
    Metallic1, Metallic2, Metallic3, Metallic4, Metallic5, Metallic6, Metallic7, Metallic8, Metallic9, Metallic10,
    Metallic11, Metallic12, Metallic13, Metallic14, Metallic15, Metallic16, Metallic17, Metallic18, Metallic19, Metallic20,
    Metallic21, Metallic22, Metallic23, Metallic24, Metallic25, Metallic26, Metallic27, Metallic28, Metallic29, Metallic30,
    Metallic31, Metallic32, Metallic33, Metallic34, Metallic35, Metallic36, Metallic37, Metallic38, Metallic39, Metallic40,
    Metallic41, Metallic42, Metallic43, Metallic44, Metallic45, Metallic46, Metallic47, Metallic48, Metallic49, Metallic50,
    Metallic51, Metallic52, Metallic53, Metallic54, Metallic55, Metallic56, Metallic57, Metallic58, Metallic59, Metallic60, Metallic61
  ];

  const woodenImages = [
    Wooden1, Wooden2, Wooden3, Wooden4, Wooden5, Wooden6, Wooden7, Wooden8, Wooden9, Wooden10,
    Wooden11, Wooden12, Wooden13, Wooden14, Wooden15, Wooden16, Wooden17, Wooden18, Wooden19, Wooden20,
    Wooden21, Wooden22, Wooden23, Wooden24, Wooden25, Wooden26, Wooden27, Wooden28, Wooden29, Wooden30
  ];

  const projects = [
    ...metallicImages.map((img) => ({ title: "", image: img, category: "Metallic" })),
    ...woodenImages.map((img) => ({ title: "", image: img, category: "Wooden" })),
  ];

  const filteredProjects = projects.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-[#f8f9fa] px-4 sm:px-6 lg:px-20 py-16 text-[#343a40] relative">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Products</h2>
        <p className="text-[#6c757d] text-base sm:text-lg mb-6">
          Explore our exclusive range of lighting designs tailored for your space.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          {["Metallic", "Wooden"].map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#212529] text-[#f8f9fa]"
                  : "bg-[#dee2e6] text-[#212529] hover:bg-[#adb5bd]"
              }`}
            >
              {category} Lights
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory + currentPage}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {currentProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative group bg-[#e9ecef] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-3 flex-wrap">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              currentPage === 1
                ? "bg-[#dee2e6] text-[#6c757d] cursor-not-allowed"
                : "bg-[#212529] text-[#f8f9fa] hover:opacity-90"
            }`}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-lg font-medium ${
                currentPage === i + 1
                  ? "bg-[#212529] text-[#f8f9fa]"
                  : "bg-[#dee2e6] text-[#212529] hover:bg-[#adb5bd]"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              currentPage === totalPages
                ? "bg-[#dee2e6] text-[#6c757d] cursor-not-allowed"
                : "bg-[#212529] text-[#f8f9fa] hover:opacity-90"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* ✅ Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </button>

        {open && (
          <div className="absolute bottom-20 right-0 bg-white text-[#212529] w-72 p-5 rounded-xl shadow-xl border border-[#e9ecef]">
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
              <MapPin className="w-4 h-4" /> Plot No. 3, Devam Residency, Karadva, Surat, Gujarat, India
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
