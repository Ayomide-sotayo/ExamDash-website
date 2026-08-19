import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="ExamDash"
            className="h-8 w-auto mix-blend-multiply"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-poppins font-medium text-[16px] leading-none text-[#68727D]">
          <Link
            to="/"
            className={`hover:text-red-500 transition-colors ${location.pathname === "/" ? "text-red-500" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/features"
            className={`hover:text-red-500 transition-colors ${location.pathname === "/features" ? "text-red-500" : ""}`}
          >
            Features
          </Link>
          <Link
            to="/about"
            className={`hover:text-red-500 transition-colors ${location.pathname === "/about" ? "text-red-500" : ""}`}
          >
            About
          </Link>
          <Link
            to="/how-it-works"
            className={`hover:text-red-500 transition-colors ${location.pathname === "/how-it-works" ? "text-red-500" : ""}`}
          >
            How it works
          </Link>
          <Link
            to="/waitlist"
            className={`hover:text-red-500 transition-colors ${location.pathname === "/waitlist" ? "text-red-500" : ""}`}
          >
            Waitlist
          </Link>
          <Link
            to="/faq"
            className={`hover:text-red-500 transition-colors ${location.pathname === "/faq" ? "text-red-500" : ""}`}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className={`hover:text-red-500 transition-colors ${location.pathname === "/contact" ? "text-red-500" : ""}`}
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/waitlist"
            className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:shadow-lg transition-all border-0 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 font-poppins font-medium text-[16px] leading-none text-[#68727D]">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/features" onClick={() => setOpen(false)}>
            Features
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/how-it-works" onClick={() => setOpen(false)}>
            How it works
          </Link>
          <Link to="/waitlist" onClick={() => setOpen(false)}>
            Waitlist
          </Link>
          <Link to="/faq" onClick={() => setOpen(false)}>
            FAQ
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            to="/waitlist"
            className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 transition-all border-0 text-white text-center py-2.5 rounded-full"
            onClick={() => setOpen(false)}
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
