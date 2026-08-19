import React from "react";
import PhoneMockup from "../components/PhoneMockup";
import { Section, FeatureRow } from "../components/Shared";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden pt-24 pb-16">
      {/* ── HEADER ────────────────────────── */}
      <div className="grid md:grid-cols-2 gap-8 items-center px-4 max-w-6xl mx-auto mb-20 md:mb-32">
        <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900">
          Assess.
          <br />
          Understand.
          <br />
          Improve. Repeat.
        </h1>
        <div className="flex flex-col items-start gap-6">
          <p className="text-gray-600 leading-relaxed text-sm">
            Our app provides complete clear insight that is designed to help you
            understand and improve your progression on a personalized journey.
          </p>
          <Link
            to="/download"
            className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:shadow-lg transition-all border-0 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
          >
            Get started for free
          </Link>
        </div>
      </div>

      {/* ── STEPS LIST ─────────────────────────────── */}
      <div className="flex flex-col gap-24">
        {/* Step 1: Download */}
        <Section className="py-0 md:py-0">
          <FeatureRow
            title="Download the App"
            description="You are a few downloads away. Use the links to download the app on your Android device, then follow all the directed steps you get. This correct website provides the Android links and liable to be short-cut for your free access out of sheer confidence."
            screenBg="bg-slate-900" /* matching the dark mock phone partially visible */
          />
        </Section>

        {/* Step 2: Create Account */}
        <Section className="py-0 md:py-0">
          <FeatureRow
            phoneLeft
            title="Create Your Account"
            description="With the full sign up you fill in your ready information according to our Privacy Policy. The privacy applies for the information which is purely in limits and keeps all app updates in their rights."
            screenBg="bg-gray-100"
          />
        </Section>

        {/* Step 3: Set Goal */}
        <Section className="py-0 md:py-0">
          <FeatureRow
            title="Set Your Score Goal"
            description="Select the professional exam you expect to target, give the exact goals out of the platform then ExamDash maps out your weakness properly to negotiate learning materials the smart route, and maps clear details along the progress of written projects, your practice logs and other important resources."
            screenBg="bg-indigo-50"
          />
        </Section>

        {/* Step 4: Diagnostic */}
        <Section className="py-0 md:py-0">
          <FeatureRow
            phoneLeft
            title="Take the Diagnostic"
            description="The initial check gives ExamDash a starting point. It maps directly exactly where you are and what parts of the pathway you truly need more practice in."
            screenBg="bg-red-500" // the interior is red orange
          />
        </Section>

        {/* Step 5: Study */}
        <Section className="py-0 md:py-0">
          <FeatureRow
            title="Study with ExamDash"
            description="Learning under this progression helps simply sum up the guaranteed maximum interaction. Your own activity path shows your detailed correct drill learning patterns, matching the correct main anchors... it's exactly the comfort of studying better."
            screenBg="bg-amber-100"
          />
        </Section>

        {/* Step 6: Track Progress */}
        <Section className="py-0 md:py-0">
          <FeatureRow
            phoneLeft
            title="Track Your Progress"
            description="Ping your score completely. Put in any customization you feel purely matters. Takes overall records everything constantly running a status progress for when performance frequently matters most across any goals and whether purely clear means."
            screenBg="bg-pink-50"
          />
        </Section>
      </div>

      {/* ── DARK CTA SECTION ────────────────────────────── */}
      <section className="relative bg-gray-900 py-24 px-4 mt-24 text-center overflow-hidden mx-4 rounded-3xl max-w-6xl md:mx-auto">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight mt-12 md:mt-16">
            Start With a Clearer Picture.
          </h2>
          <p className="text-gray-300 text-sm mb-8">
            You are already learning what is your exam ratio.
            <br />
            ExamDash keeps a custom net result dedicated to you daily.
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
