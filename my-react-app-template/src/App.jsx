import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Products from "./pages/Products";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import './App.css'
import { lazy, Suspense } from "react";

// Lazy load pages
const Homee = lazy(() => import("./pages/Home"));
const Aboutt = lazy(() => import("./pages/About"));
const Contactt = lazy(() => import("./pages/Contact"));
const Portfolioo = lazy(() => import("./pages/Portfolio"));
const Productss = lazy(() => import("./pages/Products"));
const Testimonialss = lazy(() => import("./pages/Testimonials"));

export default function App() {
  return(
     <Router>
      <Navbar />
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
    
  )
}
