import React from "react";
import PhoneMockup from "../components/PhoneMockup";
import { Section } from "../components/Shared";

export default function Waitlist() {
  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden pt-24 pb-16">
      {/* ── TOP SECTION (Text/Cards + Phone) ───────────────── */}
      <Section className="py-0 md:py-0 mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 mb-6">
                We Built ExamDash for
                <br />
                the Question Study
                <br />
                Tools Leave Unanswered.
              </h1>
              <p className="text-gray-600 leading-relaxed text-sm">
                Candidates can track hours, chapters and scores. The
                <br />
                harder question is what all of that means for exam
                <br />
                readiness.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Early Access Card */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Early Access
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Access to the current product experience on the first live
                  pathway while ExamDash continues improving features and
                  content.
                </p>
              </div>

              {/* Exclusive Updates Card */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Exclusive Updates
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Release changes, pathway additions, methodology updates and
                  known limitations — each stating its date and explaining the
                  candidate impact in plain language.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Phone in Grey Box) */}
          <div className="bg-gray-50 rounded-[40px] p-8 flex items-center justify-center min-h-[600px]">
            <PhoneMockup screenBg="bg-white" className="shadow-2xl" />
          </div>
        </div>
      </Section>

      {/* ── BOTTOM SECTION (Photo + Form) ────────────────────── */}
      <Section className="py-0 md:py-0 mb-16">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <div className="relative rounded-3xl overflow-hidden h-[500px]">
            {/* Using a dark placeholder block instead of a real image since I don't have the asset */}
            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
              <span className="text-slate-500 font-medium">
                Waitlist Photo Placeholder
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-700">
                Full Name (required)
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-700">
                Email Address (required)
              </label>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-700">
                Target Exam Date (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. November 2026"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all"
              />
            </div>

            <button className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:shadow-lg transition-all border-0 text-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors mt-2">
              Join Waitlist
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
