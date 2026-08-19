import React from "react";
import PhoneMockup from "../components/PhoneMockup";
import { Section, FeatureRow } from "../components/Shared";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden pt-24 pb-16">
      {/* ── HEADER & HERO MOCKUPS ────────────────────────── */}
      <div className="text-center px-4 max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-gray-900">
          More Than Study Tools. A<br />
          Connected Readiness Experience.
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Every part of the examdash app works for one goal: helping you
          <br />
          achieve expert mastery so you can pass your professional exam.
        </p>
        <Link
          to="/download"
          className="inline-block bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:shadow-lg transition-all border-0 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
        >
          Get started for free
        </Link>
      </div>

      {/* Overlapping Phones Hero */}
      <div className="flex justify-center items-end h-[350px] mb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-3xl h-full bg-gray-100 rounded-3xl -z-10" />
        <div className="flex -space-x-8 translate-y-16">
          <PhoneMockup
            screenBg="bg-slate-800"
            className="transform -rotate-6 shadow-2xl relative z-10"
          />
          <PhoneMockup
            screenBg="bg-slate-900"
            className="transform rotate-6 shadow-xl w-[220px] h-[450px]"
          />
        </div>
      </div>

      {/* ── FEATURES LIST ─────────────────────────────── */}
      <div className="flex flex-col gap-24">
        {/* Recall Pool */}
        <Section className="py-0 md:py-0">
          <FeatureRow
            phoneLeft
            title="Recall Pool"
            description="Our advanced space repetition engine ensures that you retain everything you learn across your exam preparation. It adapts precisely targeting specifically the weak areas and solidifying your knowledge long term. Ace and dominate the rest."
            screenBg="bg-indigo-900"
          />
        </Section>

        {/* Drill Mode */}
        <Section className="py-0 md:py-0">
          <FeatureRow
            title="Drill Mode"
            description="Leave nothing to chance! Put yourself under pressure just like the real exam. We help you simulate standard exam conditions, with timed mock exams, random question formats, and full detailed analysis of your performance after."
            screenBg="bg-gray-100"
          />
        </Section>

        {/* Patient Chart */}
        <Section className="py-0 md:py-0">
          <FeatureRow
            phoneLeft
            title="Patient Chart"
            description="Come and discuss the interacting patterns with real life clinical scenarios. No pressure here just a safe space where the knowledge base is built on practical testing."
            screenBg="bg-gray-50"
          />
        </Section>

        {/* Best Next Step */}
        <Section className="py-0 md:py-0">
          <FeatureRow
            title="Best Next Step"
            description="Learn how to react under specific circumstances. Think quickly as you are given varying choices to make, allowing you to train your judgement calls and know how exactly to answer the related questions."
            screenBg="bg-emerald-100"
          />
        </Section>

        {/* Readiness Score */}
        <Section className="py-0 md:py-0">
          <FeatureRow
            phoneLeft
            title="Readiness Score"
            description="Don't walk into the exam blind! Examdash gives you a real time analysis of an exam readiness, taking into account all the metrics from your practice tests and assessments. Know exactly when you are truly 100% prepared to pass your exams."
            screenBg="bg-red-50"
          />
        </Section>
      </div>

      {/* ── DARK CTA SECTION ────────────────────────────── */}
      <section className="relative bg-gray-900 py-24 px-4 mt-24 text-center overflow-hidden mx-4 rounded-3xl max-w-6xl md:mx-auto">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <div className="rotate-12 mb-8 opacity-90 drop-shadow-2xl">
            <PhoneMockup screenBg="bg-gray-100" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Use the Right Activity for the
            <br />
            Weakness in Front of You.
          </h2>
          <p className="text-gray-300 text-sm mb-8">
            Stop guessing your readiness, clear the uncertainty and
            <br />
            know exactly what to study to pass your exams.
          </p>
          <Link
            to="/download"
            className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:shadow-lg transition-all border-0 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
          >
            Get started for free
          </Link>
        </div>
      </section>
    </div>
  );
}
