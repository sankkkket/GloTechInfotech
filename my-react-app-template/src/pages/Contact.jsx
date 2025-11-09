import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-[#f8f9fa] px-4 sm:px-6 lg:px-20 py-20 text-[#343a40] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#e9ecef] rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#dee2e6] rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Get in Touch
          </h2>
          <p className="text-[#6c757d] max-w-2xl mx-auto text-lg">
            Have a project in mind? We'd love to hear from you. 
            Reach out and let’s build something brilliant together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="flex items-start gap-4 bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <Mail className="w-6 h-6 text-[#343a40] mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-[#212529]">Email</h4>
                <p className="text-[#6c757d]">glotechindustries.offical@gmail.com</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <Phone className="w-6 h-6 text-[#343a40] mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-[#212529]">Phone</h4>
                <p className="text-[#6c757d]">+91 90169 79886</p>
                <p className="text-[#6c757d]">+91 63591 76395</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <MapPin className="w-6 h-6 text-[#343a40] mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-[#212529]">Location</h4>
                <p className="text-[#6c757d]">
                  Plot No. 3, Devam Residency, Karadva, Chorasi, Surat, Gujarat<br />
                  India - 394210
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-[#dee2e6] backdrop-blur-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#212529]">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-1 w-full px-4 py-3 bg-[#f8f9fa] border border-[#ced4da] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#343a40] transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#212529]">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 w-full px-4 py-3 bg-[#f8f9fa] border border-[#ced4da] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#343a40] transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#212529]">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                required
                className="mt-1 w-full px-4 py-3 bg-[#f8f9fa] border border-[#ced4da] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#343a40] transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#343a40] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#212529] transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
