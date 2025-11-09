// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Products", to: "/portfolio" },
//     // { name: "Products", to: "/products" },
//     { name: "About", to: "/about" },
//     { name: "Testimonials", to: "/testimonials" },
//     { name: "Contact", to: "/contact" },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="bg-[#f8f9fa] border-b border-[#dee2e6] sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-semibold tracking-wide text-[#212529]"
//         >
//           GloTechIndustries
//         </Link>

//         {/* Mobile Toggle Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle navigation menu"
//           aria-expanded={isOpen}
//           role="button"
//           className="md:hidden text-[#212529] focus:outline-none"
//         >
//           {isOpen ? (
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="#212529"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="#212529"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-6 text-sm font-medium">
//           {navLinks.map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               aria-current={isActive(link.to) ? "page" : undefined}
//               className={`relative transition ${
//                 isActive(link.to)
//                   ? "text-[#212529] font-semibold"
//                   : "text-[#6c757d] hover:text-[#212529]"
//               }`}
//             >
//               {link.name}
//               {/* underline effect */}
//               <span
//                 className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#212529] transform transition-transform ${
//                   isActive(link.to) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
//                 }`}
//               />
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#f8f9fa] border-t border-[#dee2e6] ${
//           isOpen ? "max-h-screen py-4" : "max-h-0"
//         }`}
//       >
//         <div className="flex flex-col items-center space-y-4 text-sm">
//           {navLinks.map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               aria-current={isActive(link.to) ? "page" : undefined}
//               onClick={() => setIsOpen(false)}
//               className={`w-full text-center py-2 transition ${
//                 isActive(link.to)
//                   ? "text-[#212529] font-semibold"
//                   : "text-[#6c757d] hover:text-[#212529]"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }


import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/LOGO.pdf (2).png"; // ✅ Update the path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Products", to: "/portfolio" },
    { name: "About", to: "/about" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "Contact", to: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#f8f9fa] border-b border-[#dee2e6] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* ✅ Logo Only (Wider + Clean) */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="GloTechIndustries Logo"
            className="w-36 h-16 sm:w-25 sm:h-10 object-contain" // 👈 wider logo
          />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          role="button"
          className="md:hidden text-[#212529] focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#212529"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#212529"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={isActive(link.to) ? "page" : undefined}
              className={`relative group transition ${
                isActive(link.to)
                  ? "text-[#212529] font-semibold"
                  : "text-[#6c757d] hover:text-[#212529]"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#212529] transform transition-transform ${
                  isActive(link.to)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#f8f9fa] border-t border-[#dee2e6] ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 text-base">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={isActive(link.to) ? "page" : undefined}
              onClick={() => setIsOpen(false)}
              className={`w-full text-center py-2 transition ${
                isActive(link.to)
                  ? "text-[#212529] font-semibold"
                  : "text-[#6c757d] hover:text-[#212529]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
