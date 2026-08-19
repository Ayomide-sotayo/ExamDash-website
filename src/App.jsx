import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Waitlist from "./pages/Waitlist";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Placeholder from "./pages/Placeholder";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/mentorship"
            element={<Placeholder title="Mentorship" />}
          />
          <Route path="/pricing" element={<Placeholder title="Pricing" />} />
          <Route path="/login" element={<Placeholder title="Log In" />} />
          <Route
            path="/download"
            element={<Placeholder title="Download App" />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
