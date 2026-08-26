import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
    { name: "How it works", path: "/how-it-works" },
    { name: "Waitlist", path: "/waitlist" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/80 shadow-2xs">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="ExamDash"
            className="h-8 sm:h-9 md:h-10 w-auto mix-blend-multiply"
          />
        </Link>

        {/* Desktop Nav Links (exact desktop font & sizes) */}
        <div className="hidden lg:flex items-center gap-7 lg:gap-12 font-sans font-medium text-[15px] lg:text-[18px] text-gray-600">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-gray-900 ${
                  isActive ? "text-gray-900 font-semibold" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Tablet Nav Links (768px - 1023px) */}
        <div className="hidden md:flex lg:hidden items-center gap-4 font-sans font-medium text-xs text-gray-600">
          {navLinks.slice(0, 5).map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-gray-900 ${
                  isActive ? "text-gray-900 font-semibold" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button (exact desktop font & sizes) */}
        <div className="hidden md:flex items-center shrink-0">
          <Link
            to="/waitlist"
            className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm lg:text-[20px] px-5 sm:px-6 lg:px-12 py-2 sm:py-2.5 lg:py-3 rounded-full shadow-md transition-all duration-200"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
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

      {/* Mobile / Tablet Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4 font-sans font-medium text-base text-gray-700 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="py-1 hover:text-rose-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/waitlist"
            className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] text-white text-center font-semibold py-3 rounded-full mt-2 shadow-md"
            onClick={() => setOpen(false)}
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
