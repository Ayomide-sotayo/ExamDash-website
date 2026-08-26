import React from "react";
import { Link } from "react-router-dom";
import watermark from "../assets/watermark.png";
import qrcode from "../assets/qrcode.png";
import floatingLogo from "../assets/floatinglogo.png";

export default function Footer() {
  return (
    <footer className="relative mt-12 sm:mt-16 md:mt-20 bg-white overflow-hidden w-full flex-shrink-0 pt-10 sm:pt-16 pb-16 sm:pb-20">
      {/* Background Watermark */}
      <div className="absolute bottom-0 left-0 right-0 z-0 flex justify-center items-end pointer-events-none opacity-40 sm:opacity-60">
        <img
          src={watermark}
          alt="ExamDash Watermark"
          className="w-full max-w-[1500px] h-auto object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 max-w-[1282px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 flex flex-col md:flex-row gap-6 lg:gap-[27px] items-stretch justify-center">
        
        {/* ── DESKTOP & TABLET LEFT: QR Code Panel ── */}
        <div className="hidden md:flex flex-shrink-0 w-[240px] lg:w-[350px] relative z-20">
          <img
            src={qrcode}
            alt="QR Code & App Stores"
            className="w-full h-full object-contain object-center drop-shadow-2xl rounded-[24px] sm:rounded-[30px]"
          />
        </div>

        {/* ── MAIN GREY CARD (Links + Newsletter + Copyright) ── */}
        <div className="bg-[#f0f0f0] rounded-[28px] sm:rounded-[36px] md:max-w-[907px] p-6 sm:p-8 md:p-10 flex flex-col flex-1 relative z-10 shadow-md">
          
          {/* Floating Logo Top Right */}
          <div
            className="absolute pointer-events-none z-30 drop-shadow-[0_12px_20px_rgba(255,44,103,0.35)] -top-10 sm:-top-12 right-2 sm:-right-6 w-20 h-20 sm:w-36 sm:h-36"
          >
            <img
              src={floatingLogo}
              alt="ExamDash Rabbit"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation Links Grid: 2 columns on mobile, 3 columns on desktop/tablet */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 mb-8 sm:mb-auto">
            {/* Column 1: Legal (and Company on mobile) */}
            <div className="flex flex-col">
              <h4 className="text-gray-500 font-medium font-poppins italic text-sm sm:text-base mb-3 sm:mb-4">
                Legal
              </h4>
              <div className="flex flex-col gap-4">
                <Link
                  to="#"
                  className="text-gray-500 font-roboto font-semibold text-xs sm:text-lg hover:text-rose-500 transition-colors"
                >
                  Privacy policy
                </Link>
                <Link
                  to="#"
                  className="text-gray-500 font-roboto font-semibold text-xs sm:text-lg hover:text-rose-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>

              {/* Company block on mobile below Legal */}
              <div className="md:hidden mt-8">
                <h4 className="text-gray-500 font-poppins font-medium italic text-sm mb-3">
                  Company
                </h4>
                <div className="flex flex-col gap-4">
                  <Link
                    to="/about"
                    className="text-gray-500 font-roboto font-semibold text-xs hover:text-rose-500 transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    to="/faq"
                    className="text-gray-500 font-roboto font-semibold text-xs hover:text-rose-500 transition-colors"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2: Product */}
            <div className="flex flex-col">
              <h4 className="text-gray-500 font-poppins font-medium italic text-sm sm:text-base mb-3 sm:mb-4">
                Product
              </h4>
              <div className="flex flex-col gap-4">
                <Link
                  to="/features"
                  className="text-gray-500 font-roboto font-semibold text-xs sm:text-lg hover:text-rose-500 transition-colors"
                >
                  Features
                </Link>
                <Link
                  to="/how-it-works"
                  className="text-gray-500 font-roboto font-semibold text-xs sm:text-lg hover:text-rose-500 transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  to="/waitlist"
                  className="text-gray-500 font-roboto font-semibold text-xs sm:text-lg hover:text-rose-500 transition-colors"
                >
                  Waitlist
                </Link>
              </div>
            </div>

            {/* Column 3: Company (Visible on desktop/tablet) */}
            <div className="hidden md:flex flex-col">
              <h4 className="text-gray-500 font-poppins font-medium italic text-sm sm:text-base mb-3 sm:mb-4">
                Company
              </h4>
              <div className="flex flex-col gap-4">
                <Link
                  to="/about"
                  className="text-gray-500 font-roboto font-semibold text-xs sm:text-lg hover:text-rose-500 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/faq"
                  className="text-gray-500 font-roboto font-semibold text-xs sm:text-lg hover:text-rose-500 transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Area (Newsletter + Copyright) */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative z-10 w-full mt-4 sm:mt-auto pt-2">
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <div>
                <p className="text-[#888888] text-xs sm:text-sm md:text-base font-medium leading-tight">
                  Practice becomes feedback.
                </p>
                <p className="text-gray-900 font-bold text-sm sm:text-base md:text-lg leading-tight mt-0.5">
                  Feedback becomes direction.
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto mt-1">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="px-4 py-2.5 sm:px-5 sm:py-3.5 flex-1 sm:w-64 bg-white rounded-xl sm:rounded-[14px] font-medium text-xs sm:text-sm min-w-0 focus:outline-none placeholder-gray-400 border border-gray-200/60 shadow-2xs"
                />
                <button className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] text-white font-bold text-xs sm:text-sm px-6 py-2.5 sm:py-3.5 rounded-full hover:opacity-90 hover:shadow-md transition-all shrink-0">
                  Enter
                </button>
              </div>
            </div>

            <div className="text-gray-500 font-medium text-[11px] sm:text-xs xl:self-end text-left sm:text-right w-full xl:w-auto mt-4 xl:mt-0 opacity-60">
              © 2026 Examdash, All Rights Reserved.
            </div>
          </div>
        </div>

        {/* ── MOBILE BOTTOM: App Store & Google Play Banner (< 768px) ── */}
        <div className="md:hidden w-full bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] rounded-[24px] p-3.5 flex flex-col gap-2.5 shadow-xl relative z-20">
          <button className="w-full bg-[#F0F1F3] hover:bg-white text-gray-800 font-semibold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xs active:scale-[0.99] transition-all">
            <span className="text-base"></span>
            <span>Get On Apple Store</span>
          </button>
          <button className="w-full bg-[#F0F1F3] hover:bg-white text-gray-800 font-semibold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xs active:scale-[0.99] transition-all">
            <span className="text-base">▶</span>
            <span>Get On Google Play</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
