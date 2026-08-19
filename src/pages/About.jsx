import React from "react";
import PhoneMockup from "../components/PhoneMockup";
import { Section } from "../components/Shared";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden pt-24 pb-16">
      {/* ── HEADER ────────────────────────── */}
      <div className="px-4 max-w-4xl mx-auto mb-20 md:mb-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900 mb-6">
          We Built ExamDash for the Question
          <br />
          Study Tools Leave Unanswered.
        </h1>
        <p className="text-gray-600 leading-relaxed text-sm max-w-2xl">
          Candidates can track hours, chapters and scores. The harder question
          <br />
          is what all of that means for exam readiness.
        </p>
      </div>

      {/* ── MISSION SECTION (Text + Phone) ─────────────────────────────── */}
      <Section className="py-0 md:py-0 mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Help Candidates Understand Their
              <br />
              Preparation Before Exam Day.
            </h2>
            <div className="flex flex-col gap-4 text-gray-600 text-sm leading-relaxed">
              <p>
                We want professional exam candidates to make preparation
                decisions with more clarity and less guesswork.
              </p>
              <p>
                ExamDash is building a platform where assessment, practice, weak
                areas and progress contribute to one connected readiness
                journey. The aim is not to replace hard work, it is to help
                candidates understand what their hard work is producing.
              </p>
            </div>
            <Link
              to="/features"
              className="self-start mt-2 bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:shadow-lg transition-all border-0 text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm"
            >
              Explore Features
            </Link>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="rotate-12 translate-x-8">
              <PhoneMockup screenBg="bg-red-500" className="shadow-2xl" />
            </div>
          </div>
        </div>
      </Section>

      {/* ── THE PROBLEM (Text + Text) ─────────────────────────────── */}
      <Section className="py-0 md:py-0 mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mt-1">
              The preparation contains plenty of content, but it needs to be
              clearer and more detailed for better understanding.
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-gray-600 text-sm leading-relaxed">
            <p>
              The problem is not always access to information. Professional exam
              candidates can find books, videos, notes, questions and online
              advice. The problem is knowing how those separate activities add
              up.
            </p>
            <p>
              Different examinations require different knowledge, question types
              and professional judgement. ExamDash does not treat every exam as
              the same — the platform provides a shared readiness structure
              while each pathway supplies the relevant preparation content and
              activities.
            </p>
            <p>
              Starting with one pathway allows ExamDash to improve the product
              experience, readiness methodology and preparation flow before
              expanding responsibly. More pathways will be announced when they
              are ready — not simply when they are planned.
            </p>
          </div>
        </div>
      </Section>

      {/* ── CORE PRINCIPLES (2x2 Grid) ─────────────────────────────── */}
      <Section className="py-0 md:py-0 bg-gray-50 rounded-3xl py-16 px-8 max-w-6xl mx-auto mb-12">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Clarity</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Activity is not the same as progress. Show candidates what their
              work adds up to.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Context</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A score without context can mislead in either direction. Always
              show what shaped it.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Improvement
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Mistakes should remain useful. Readiness should evolve as
              preparation evolves.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Responsibility
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              No platform should promise an examination result it cannot
              control.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
