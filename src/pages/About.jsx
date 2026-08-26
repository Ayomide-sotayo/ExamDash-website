import React from "react";
import { Link } from "react-router-dom";
import aboutPhoneImg from "../assets/about-phone.png";

export default function About() {
  return (
    <div className="bg-[#FCFCFC] text-gray-900 font-sans overflow-x-hidden pt-32 sm:pt-40  pb-16">
      {/* ── HEADER ────────────────────────── */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold sm:font-bold md:font-semibold text-gray-700 leading-[1.18] mb-4">
            We Built ExamDash for the Question
            <br className="hidden sm:inline" /> Study Tools Leave Unanswered.
          </h1>
          <p className="text-gray-500 font-poppins text-sm sm:text-base leading-relaxed max-w-xl md:max-w-[734px]" style={{ lineHeight: "30px" }}>
            Candidates can track hours, chapters and scores. The harder question
            is what all of that means for exam readiness.
          </p>
        </div>
      </section>

      {/* ── FIRST SECTION (Text Left, Phone Right) ───────────── */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-roboto font-semibold sm:font-bold text-gray-700 leading-tight mb-4">
              Help Candidates Understand Their
              <br className="hidden sm:inline" /> Preparation Before Exam Day.
            </h2>
            <p className="text-gray-500 font-poppins text-sm sm:text-[15px] leading-relaxed mb-4">
              We want professional exam candidates to make preparation
              decisions with more clarity and less guesswork.
            </p>
            <p className="text-gray-500 font-poppins text-sm sm:text-[15px] leading-relaxed mb-8">
              ExamDash is building a platform where assessment, practice, weak
              areas and progress contribute to one connected readiness journey.
              The aim is not to replace hard work. It is to help candidates
              understand what their hard work is producing.
            </p>
            <div>
              <Link
                to="/features"
                className="inline-block bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-semibold font-poppins text-[20px] px-12 py-3 rounded-full shadow-md transition-all duration-200"
              >
                Explore Features
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={aboutPhoneImg}
              alt="Help Candidates Understand Their Preparation Before Exam Day"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── SECOND SECTION (Statement Left, 3 Paragraphs Right) ───────────── */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="flex flex-col justify-center mb-6 md:mb-0 md:h-full">
            <h2 className="text-2xl font-roboto sm:text-3xl font-semibold sm:font-bold text-gray-700 leading-snug">
              The preparation contains plenty of content, but it needs to be
              clearer and more detailed for better understanding.
            </h2>
          </div>

          <div className="flex flex-col gap-5 font-poppins text-gray-500 text-sm sm:text-[15px] leading-relaxed">
            <p className="max-w-xl md:max-w-[734px]" style={{ lineHeight: "32px", fontSize: "20px" }}>
              The problem is not always access to information. Professional exam
              candidates can find books, videos, notes, questions and online
              advice. The problem is knowing how those separate activities add up.
            </p>
            <p className="max-w-xl md:max-w-[734px]" style={{ lineHeight: "32px", fontSize: "20px" }}>
              Different examinations require different knowledge, question types
              and professional judgement. ExamDash does not treat every exam as
              the same — the platform provides a shared readiness structure
              while each pathway supplies the relevant preparation content and
              activities.
            </p>
            <p style={{ lineHeight: "32px", fontSize: "20px" }}>
              Starting with one pathway allows ExamDash to improve the product
              experience, readiness methodology and preparation flow before
              expanding responsibly. More pathways will be announced when they
              are ready—not simply when they are planned.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-400" />
      {/* ── CORE PRINCIPLES (2x2 Grid) ─────────────────────────────── */}
      <section className="w-full max-w-[1240px] mx-auto py-10 px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="bg-[#f5f5f740] rounded-[28px] sm:rounded-[36px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xs border border-gray-100/80">
              <h3 className="text-lg sm:text-xl font-roboto font-semibold sm:font-bold text-gray-900 mb-2" style={{ fontSize: "30px" }}>
                Clarity
              </h3>
              <p className="text-gray-500 font-poppins text-xs sm:text-sm leading-relaxed" style={{ lineHeight: "32px", fontSize: "20px" }}>
                Activity is not the same as progress. Show candidates what their
                work adds up to.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xs border border-gray-100/80">
              <h3 className="text-lg sm:text-xl font-roboto font-semibold sm:font-bold text-gray-900 mb-2" style={{ fontSize: "30px" }}>
                Context
              </h3>
              <p className="text-gray-500 font-poppins text-xs sm:text-sm leading-relaxed" style={{ lineHeight: "32px", fontSize: "20px" }}>
                A score without context can mislead in either direction. Always
                show what shaped it.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xs border border-gray-100/80">
              <h3 className="text-lg sm:text-xl font-roboto font-semibold sm:font-bold text-gray-900 mb-2" style={{ fontSize: "30px" }}>
                Improvement
              </h3>
              <p className="text-gray-500 font-poppins text-xs sm:text-sm leading-relaxed" style={{ lineHeight: "32px", fontSize: "20px" }}>
                Mistakes should remain useful. Readiness should evolve as
                preparation evolves.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xs border border-gray-100/80">
              <h3 className="text-lg sm:text-xl font-roboto font-semibold sm:font-bold text-gray-900 mb-2" style={{ fontSize: "30px" }}>
                Responsibility
              </h3>
              <p className="text-gray-500 font-poppins text-xs sm:text-sm leading-relaxed" style={{ lineHeight: "32px", fontSize: "20px" }}>
                No platform should promise an examination result it cannot
                control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-400" />
    </div>
  );
}
