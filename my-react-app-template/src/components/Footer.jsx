// import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
// import { MdEmail, MdPhone } from "react-icons/md";

// export default function Footer() {
//   return (
//     <footer className="bg-[#212529] text-[#adb5bd] py-10 px-4 sm:px-10">
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
//         {/* Brand Info */}
//         <div>
//           <h2 className="text-xl font-semibold text-[#f8f9fa]">GloTechIndustries</h2>
//           <p className="text-sm mt-2">
//             Timeless lighting designs that illuminate elegance and inspire living.
//           </p>
//         </div>

//         {/* Contact + Social */}
//         <div className="flex flex-col items-start sm:items-end gap-3 text-sm">
//           {/* Email */}
//           <div className="flex items-center gap-2">
//             <MdEmail className="text-lg" />
//             <a
//               href="mailto:glotechindustries.offical@gmail.com"
//               className="hover:text-[#f8f9fa] transition"
//             >
//               glotechindustries.offical@gmail.com
//             </a>
//           </div>

//           {/* Phone Numbers */}
//           <div className="flex items-center gap-2">
//             <MdPhone className="text-lg" />
//             <a href="tel:+919016979886" className="hover:text-[#f8f9fa] transition">
//               +91 90169 79886
//             </a>
//             <span className="mx-2">|</span>
//             <a href="tel:+916359176395" className="hover:text-[#f8f9fa] transition">
//               +91 63591 76395
//             </a>
//           </div>

//           {/* Socials */}
//           <div className="flex gap-4 text-lg">
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-[#f8f9fa] transition"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-[#f8f9fa] transition"
//             >
//               <FaFacebook />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-[#f8f9fa] transition"
//             >
//               <FaLinkedin />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="mt-8 text-center text-sm text-[#6c757d] border-t border-[#343a40] pt-6">
//         &copy; {new Date().getFullYear()} GloTechIndustries. All rights reserved.
//       </div>
//     </footer>
//   );
// }




import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from "../assets/Images/LOGO.pdf (4).png"; // ✅ ensure the path is correct

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-[#adb5bd] py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Left Section - Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logo}
            alt="GloTechIndustries Logo"
            className="w-40 h-40 object-contain mb-3"
          />
          <p className="text-sm text-[#dee2e6] font-medium tracking-wide">
            GloTech Industries
          </p>
          <p className="text-xs text-[#6c757d] mt-1 max-w-[250px] leading-relaxed">
            Specialised in Customised Lights
          </p>
        </div>

        {/* Right Section - Contact & Socials */}
        <div className="flex flex-col items-center md:items-end gap-4 text-sm">
          {/* Contact Info */}
          <div className="flex flex-col gap-2 items-center md:items-end text-center md:text-right">
            {/* Email */}
            <div className="flex items-center gap-2">
              <MdEmail className="text-lg text-[#f8f9fa]" />
              <a
                href="mailto:glotechindustries.offical@gmail.com"
                className="hover:text-[#f8f9fa] transition"
              >
                glotechindustries.offical@gmail.com
              </a>
            </div>

            {/* ✅ Address */}
            <div className="flex items-start gap-2 max-w-xs md:max-w-sm text-left md:text-right">
              <MdLocationOn className="text-lg text-[#f8f9fa] mt-0.5" />
              <p className="leading-relaxed">
                Plot No. 3, Devam Residency, Karadva, Chorasi, Surat, Gujarat,
                India - 394210
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-center gap-2">
              <MdPhone className="text-lg text-[#f8f9fa]" />
              <a
                href="tel:+919016979886"
                className="hover:text-[#f8f9fa] transition"
              >
                +91 90169 79886
              </a>
              <span className="text-[#6c757d]">|</span>
              <a
                href="tel:+916359176395"
                className="hover:text-[#f8f9fa] transition"
              >
                +91 63591 76395
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-xl mt-2">
            <a
              href="https://www.instagram.com/glotechindustries/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f8f9fa] transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f8f9fa] transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f8f9fa] transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-[#343a40] pt-6 text-center text-xs text-[#6c757d]">
        &copy; {new Date().getFullYear()} GloTechIndustries. All rights reserved.
      </div>
    </footer>
  );
}

