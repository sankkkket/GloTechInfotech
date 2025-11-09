// import { products } from "../assets/data/products";

// export default function Products() {
//   return (
//     <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//       {products.map(product => (
//         <div key={product.id} className="shadow-md rounded overflow-hidden">
//           <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//           <div className="p-4">
//             <h3 className="font-semibold text-lg">{product.name}</h3>
//             <p className="text-sm text-gray-600 mb-2">{product.category}</p>
//             <p className="text-sm text-gray-700 mb-2">{product.description}</p>
//             <p className="text-lg font-bold">{product.price}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import heroImage from "../assets/Images/img.webp";

export default function Products() {
  const products = [
    { name: "Industrial Ceiling Lamp", price: "₹4,999", image: heroImage },
    { name: "Glass Dome Pendant", price: "₹6,499", image: heroImage },
    { name: "Rustic Wall Light", price: "₹3,200", image: heroImage },
    { name: "Classic Chandelier", price: "₹12,999", image: heroImage },
    { name: "Gold Spiral Light", price: "₹9,800", image: heroImage },
    { name: "Modern Desk Lamp", price: "₹2,700", image: heroImage },
  ];

  return (
    <section className="min-h-screen bg-[#f8f9fa] px-4 sm:px-6 lg:px-20 py-16 text-[#343a40] relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Products
        </h2>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-[#dee2e6] group relative overflow-hidden hover:shadow-lg transition"
            >
              {/* Product Image */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h4 className="text-lg font-semibold text-[#212529] mb-1">
                  {product.name}
                </h4>
                <p className="text-sm text-[#6c757d]">{product.price}</p>
              </div>

              {/* Hover Overlay (Desktop) */}
              <div className="absolute inset-0 bg-[#212529]/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <button className="bg-[#f8f9fa] text-[#212529] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#e9ecef] transition">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>

              {/* Always visible Add to Cart on Mobile */}
              <div className="md:hidden p-3 border-t border-[#dee2e6]">
                <button className="w-full bg-[#212529] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#343a40] transition">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
