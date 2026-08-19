import React from "react";
import { Section } from "../components/Shared";

export default function Contact() {
  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden pt-24 pb-32 min-h-[70vh]">
      <Section className="py-0 md:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column (Text) */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 mt-2">
              How Can We Help?
            </h1>
            <p className="text-gray-600 leading-relaxed text-base max-w-lg">
              Contact the team about product support, beta feedback,
              partnerships or general enquiries. ExamDash is still growing, and
              useful conversations matter.
            </p>
          </div>

          {/* Right Column (Form) */}
          <div className="flex flex-col gap-6 w-full">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-700">
                  Full Name (required)
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all font-medium text-gray-900 placeholder-gray-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-700">
                  Email Address (required)
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all font-medium text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter Subject"
                className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all font-medium text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-700">
                Message
              </label>
              <textarea
                rows="6"
                placeholder="How can we help you?"
                className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all font-medium text-gray-900 placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <button className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:shadow-lg transition-all border-0 text-white font-bold text-sm px-8 py-4 rounded-full transition-colors mt-2">
              Send Message
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
