import React from "react";
import PhoneMockup from "../components/PhoneMockup";
import { Badge, CheckItem, Section, FeatureRow } from "../components/Shared";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden pt-16">
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative bg-gray-900 min-h-[520px] flex flex-col items-center justify-center text-center px-4 pt-16 pb-16">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.25)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <Badge text="🚀 ExamDash" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mt-2 mb-4">
            How Do You Know When You're Ready for Your Professional Exam?
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Stop guessing. ExamDash gives you the exact readiness signal you
            need — backed by smart diagnostics, practice drills, and mentor
            support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#download"
              className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:shadow-lg transition-all border-0 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
            >
              Download the App
            </a>
            <a
              href="#how-it-works"
              className="border border-gray-600 text-gray-300 hover:border-gray-400 font-medium px-8 py-3 rounded-full transition-colors text-sm"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ── PROBLEM SECTION ─────────────────────────────── */}
      <Section className="bg-white">
        <FeatureRow
          badge="The Problem"
          title="You Can Study for Months and Still Not Know Whether You're Ready."
          description="Most exam prep tools give you content but no confidence signal. You finish a course and still wonder — am I actually ready? ExamDash solves this by continuously measuring your true readiness so you never walk into an exam unprepared."
          accentBtn="Find Out Now"
          screenBg="bg-pink-50"
        />
      </Section>

      {/* ── DECIDE CONFIDENTLY ──────────────────────────── */}
      <Section className="bg-gray-50">
        <FeatureRow
          phoneLeft
          badge="Smart Readiness"
          title="Decide Confidently!"
          description="ExamDash tracks your knowledge gaps in real time and gives you a clear readiness score — so you know exactly when you're exam-ready."
          bullets={[
            "Real-time readiness score updated after every session",
            "Personalized weak-spot detection with targeted drills",
            "Visual progress tracker to keep you motivated",
          ]}
          screenBg="bg-yellow-50"
        />
      </Section>

      {/* ── HOW EXAMDASH WORKS ──────────────────────────── */}
      <Section id="how-it-works" className="bg-white">
        <div className="text-center mb-16">
          <Badge text="The App" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
            How ExamDash Works
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            A structured path from uncertainty to exam-day confidence — built
            for busy professionals.
          </p>
          <button className="mt-5 bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:shadow-lg transition-all border-0 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors">
            Sign up for free
          </button>
        </div>

        <div className="flex flex-col gap-24">
          <FeatureRow
            badge="Home"
            title="Your Dashboard at a Glance"
            description="See your daily goals, current readiness score, and recommended study activities the moment you open the app. Everything you need, nothing you don't."
            screenBg="bg-blue-50"
          />
          <FeatureRow
            phoneLeft
            badge="Practice"
            title="Drill"
            description="Adaptive practice questions that target your weakest areas first. The more you practice, the smarter the recommendations get."
            bullets={[
              "AI-curated question sets for maximum efficiency",
              "Timed sessions to simulate real exam pressure",
              "Instant explanations after every answer",
            ]}
            screenBg="bg-red-50"
          />
          <FeatureRow
            id="mentor"
            badge="Mentorship"
            title="Find a Mentor"
            description="Get matched with a certified professional who's already passed your target exam. Ask questions, get feedback, and stay accountable."
            bullets={[
              "Browse mentors by certification and industry",
              "Schedule 1-on-1 sessions at your convenience",
              "Track your progress with your mentor's guidance",
            ]}
            screenBg="bg-green-50"
          />
          <FeatureRow
            phoneLeft
            badge="Quiz"
            title="Quiz"
            description="Take full-length mock exams that mirror the real test format. Get a detailed performance breakdown and know exactly where to focus next."
            screenBg="bg-purple-50"
          />
          <FeatureRow
            badge="Analytics"
            title="Track Your Progress"
            description="Beautiful charts and insights show you how far you've come and what's left to conquer. Visualize your readiness journey week by week."
            screenBg="bg-orange-50"
          />
        </div>
      </Section>

      {/* ── HOW YOUR PATH WORKS ─────────────────────────── */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <Badge text="The Journey" />
          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            How Your Path Works
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            A clear, step-by-step journey from sign-up to exam success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            {[
              {
                step: "01",
                title: "Set Your Exam Goal",
                desc: "Choose your certification target and your exam date.",
              },
              {
                step: "02",
                title: "Take the Diagnostic",
                desc: "A short quiz that maps your current knowledge landscape.",
              },
              {
                step: "03",
                title: "Get Your Study Plan",
                desc: "A personalised daily plan built around your schedule.",
              },
              {
                step: "04",
                title: "Practice & Track",
                desc: "Use drills, quizzes, and mentors to close every gap.",
              },
              {
                step: "05",
                title: "Confirm Your Readiness",
                desc: "Your score hits the target — book your exam with confidence.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 transition-all border-0 text-white flex items-center justify-center font-bold text-sm">
                  {step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <PhoneMockup screenBg="bg-red-50" className="mt-8" />
            <PhoneMockup screenBg="bg-blue-50" className="-mt-4" />
          </div>
        </div>
      </Section>

      {/* ── CTA DARK SECTION ────────────────────────────── */}
      <section
        id="download"
        className="relative bg-gray-900 py-20 px-4 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(220,38,38,0.2)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <Badge text="Get Started" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-1 mb-4 leading-tight">
            Built for Professionals.
            <br />
            Certification Exams.
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
            Whether you're targeting PMP, CPA, CIMA, or any other professional
            certification — ExamDash is the smartest way to prepare.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:shadow-lg transition-all border-0 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm">
              Download for Free
            </button>
            <button className="border border-gray-600 text-gray-300 hover:border-gray-400 font-medium px-8 py-3 rounded-full transition-colors text-sm">
              View Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
