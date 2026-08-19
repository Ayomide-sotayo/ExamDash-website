import React from "react";
import { Link } from "react-router-dom";
import watermark from "../assets/watermark.png";
import qrcode from "../assets/qrcode.png";
import floatingLogo from "../assets/floatinglogo.png";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-white overflow-hidden w-full flex-shrink-0 pt-16 pb-20">
      {/* Background Watermark */}
      <div className="absolute bottom-0 left-0 right-0 z-0 flex justify-center items-end pointer-events-none opacity-60">
        <img
          src={watermark}
          alt="ExamDash Watermark"
          className="w-full max-w-[1500px] h-auto object-cover object-bottom Mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 max-w-[1282px] mx-auto px-4 lg:px-8 mt-4 md:mt-10 flex flex-col md:flex-row gap-[27px] items-stretch justify-center">
        {/* Left Box (QR Code Panel) */}
        <div className="flex-shrink-0 w-full md:w-[310px] relative z-20 flex">
          <img
            src={qrcode}
            alt="QR Code & App Stores"
            className="w-full h-full object-contain object-center drop-shadow-2xl rounded-[30px]"
          />
        </div>

        {/* Right Box (Main Link & Newsletter Area) */}
        <div className="bg-[#f0f0f0] rounded-[30px] p-8 md:px-10 md:py-10 flex flex-col flex-1 relative z-10 shadow-md">
          {/* Floating Logo Top Right */}
          <div
            className="absolute pointer-events-none z-30 drop-shadow-[0_15px_15px_rgba(255,44,103,0.35)]"
            style={{
              top: "-50px",
              right: "20px",
              width: "120px",
              height: "120px",
            }}
          >
            <img
              src={floatingLogo}
              alt="ExamDash Rabbit"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Top 3-Column Navigation Grid */}
          <div className="flex gap-24 mb-auto">
            <div className="flex-shrink-0 w-max">
              <h4 className="text-gray-500 font-medium italic text-[18px] mb-5">
                Legal
              </h4>
              <div className="flex flex-col gap-2">
                <Link
                  to="#"
                  className="text-gray-700 font-semibold text-[17px] whitespace-nowrap hover:text-red-500 transition-colors"
                >
                  Privacy policy
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 font-semibold text-[17px] whitespace-nowrap hover:text-red-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 w-max">
              <h4 className="text-gray-500 font-medium italic text-[18px] mb-5">
                Product
              </h4>
              <div className="flex flex-col gap-2">
                <Link
                  to="/features"
                  className="text-gray-700 font-semibold text-[17px] whitespace-nowrap hover:text-red-500 transition-colors"
                >
                  Features
                </Link>
                <Link
                  to="/how-it-works"
                  className="text-gray-700 font-semibold text-[17px] whitespace-nowrap hover:text-red-500 transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  to="/waitlist"
                  className="text-gray-700 font-semibold text-[17px] whitespace-nowrap hover:text-red-500 transition-colors"
                >
                  Waitlist
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 w-max">
              <h4 className="text-gray-500 font-medium italic text-[18px] mb-5">
                Company
              </h4>
              <div className="flex flex-col gap-2">
                <Link
                  to="/about"
                  className="text-gray-700 font-semibold text-[17px] whitespace-nowrap hover:text-red-500 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/faq"
                  className="text-gray-700 font-semibold text-[17px] whitespace-nowrap hover:text-red-500 transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Area (Newsletter + Copyright) */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative z-10 w-full mt-auto pt-4">
            <div className="flex flex-col gap-3 w-max">
              <div className="mb-2">
                <p className="text-[#888888] text-[17px] font-medium leading-tight">
                  Practice becomes feedback.
                </p>
                <p className="text-gray-900 font-bold text-[18px] leading-tight mt-1">
                  Feedback becomes direction.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full mt-2">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="px-5 py-3.5 flex-1 bg-white rounded-[14px] font-medium text-[14px] min-w-0 focus:outline-none placeholder-gray-400"
                />
                <button className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] text-white font-bold text-[14px] w-[104px] h-[52px] px-[20px] py-[10px] rounded-full flex items-center justify-center gap-[10px] hover:opacity-90 hover:shadow-md transition-all">
                  Enter
                </button>
              </div>
            </div>

            <div
              className="text-gray-900 opacity-30 font-semibold text-[17px] xl:self-end text-left sm:text-right w-full xl:w-auto mt-6 xl:mt-0 pb-1"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              © 2026 Examdash, All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
