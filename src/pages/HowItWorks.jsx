import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";
import imgDownload from "../assets/how-download.png";
import imgCreateAccount from "../assets/how-create-account.png";
import imgSetGoal from "../assets/how-set-goal.png";
import imgDiagnostic from "../assets/how-diagnostic.png";
import imgStudy from "../assets/how-study.png";
import imgProgress from "../assets/how-progress.png";

export default function HowItWorks() {
  return (
    <div className="bg-[#FCFCFC] text-gray-900 font-sans overflow-x-hidden pt-32 sm:pt-40 pb-16">
      {/* ── HEADER (# How it works) ────────────────────────── */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end justify-between">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-semibold sm:font-medium text-gray-700 leading-[1.12]">
              Assess.
              <br />
              Understand.
              <br />
              Improve. Repeat.
            </h1>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6">
            <p className="text-gray-500 font-poppins text-sm sm:text-base leading-relaxed md:text-right max-w-lg md:max-w-[734px]">
              Every part of ExamDash supports the same goal: helping you
              understand and improve your preparation for a professional exam.
            </p>
            <a
              href="#explore"
              className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-semibold font-poppins text-[20px] px-12 py-3 rounded-full shadow-md transition-all duration-200"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      <hr className="border-gray-400" />

      {/* ── 6 STEP-BY-STEP ROWS (# Desktop - 16) ───────────── */}
      <section id="explore" className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28 md:mt-28">
        <div className="flex flex-col gap-16 sm:gap-24">

          {/* ── Step 1: Download the App (Text Left, Image Right) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-roboto font-semibold sm:font-bold text-gray-900 mb-3">
                Download the App
              </h3>
              <p className="text-gray-500 text-sm font-poppins sm:text-[15px] leading-relaxed max-w-lg">
                Use the beta download link on the website to download the APK to an Android device,
                then follow Android's installation prompts. The current website promotes the Android
                beta; availability on other platforms will be announced when confirmed.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="bg-[#f5f5f7fe] rounded-[28px] sm:rounded-[16px]  w-full flex items-center justify-center min-h-[300px] sm:min-h-[360px] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow">
                <img
                  src={imgDownload}
                  alt="Download the App"
                  className="max-w-[639.08px] sm:max-w-[562px] w-full h-auto  object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* ── Step 2: Create Your Account (Image Left, Text Right) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 md:order-1 flex justify-center">
              <div className="bg-[#F5F5F7] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 w-full flex items-end justify-center min-h-[340px] sm:min-h-[380px] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow">
                <img
                  src={imgCreateAccount}
                  alt="Create Your Account"
                  className="max-w-[280px] sm:max-w-[320px] w-full h-auto object-contain drop-shadow-xl translate-y-3 sm:translate-y-4"
                />
              </div>
            </div>
            <div className="order-2 md:order-2 text-start md:text-end max-w-lg flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-roboto font-semibold sm:font-bold text-gray-900 mb-3">
                Create Your Account
              </h3>
              <p className="text-gray-500 text-sm font-poppins sm:text-[15px] leading-relaxed max-w-lg">
                ExamDash handles personal and study information according to its Privacy Policy.
                The policy explains the information collected, why it is used and how users can
                exercise their rights.
              </p>
            </div>
          </div>

          {/* ── Step 3: Set Your Exam Goal (Text Left, Image Right) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-roboto font-semibold sm:font-bold text-gray-900 mb-3">
                Set Your Exam Goal
              </h3>
              <p className="text-gray-500 text-sm font-poppins sm:text-[15px] leading-relaxed max-w-lg">
                Select the professional examination you are preparing for and add your target exam date.
                ExamDash uses your selected pathway to organise the relevant preparation experience,
                and your exam date adds context helping the platform present your progress against
                the time you have available.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="bg-[#F5F5F7] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 w-full flex items-end justify-center min-h-[340px] sm:min-h-[380px] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow">
                <img
                  src={imgSetGoal}
                  alt="Set Your Exam Goal"
                  className="max-w-[280px] sm:max-w-[320px] w-full h-auto object-contain drop-shadow-xl translate-y-3 sm:translate-y-4"
                />
              </div>
            </div>
          </div>

          {/* ── Step 4: Take the Diagnostic (Image Left, Text Right) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 md:order-1 flex justify-center">
              <div className="bg-[#F5F5F7] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 w-full flex items-end justify-center min-h-[340px] sm:min-h-[380px] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow">
                <img
                  src={imgDiagnostic}
                  alt="Take the Diagnostic"
                  className="max-w-[280px] sm:max-w-[320px] w-full h-auto object-contain drop-shadow-xl translate-y-3 sm:translate-y-4"
                />
              </div>
            </div>
            <div className="order-2 md:order-2 text-start md:text-end max-w-lg flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-roboto font-semibold sm:font-bold text-gray-900 mb-3">
                Take the Diagnostic
              </h3>
              <p className="text-gray-500 text-sm font-poppins sm:text-[15px] leading-relaxed max-w-lg">
                The initial check gives ExamDash a starting point. It helps identify stronger areas,
                weaker areas and the parts of the pathway that may need more evidence.
              </p>
            </div>
          </div>

          {/* ── Step 5: Study with ExamDash (Text Left, Image Right) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-roboto font-semibold sm:font-bold text-gray-900 mb-3">
                Study with ExamDash
              </h3>
              <p className="text-gray-500 text-sm font-poppins sm:text-[15px] leading-relaxed max-w-lg">
                Continue with the preparation activity that best fits your current readiness
                information. Your next action may be a focused mission, an exam drill, a learning
                game, mistake review or readiness recheck. Different needs call for different activities.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="bg-[#F5F5F7] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 w-full flex items-end justify-center min-h-[340px] sm:min-h-[380px] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow">
                <img
                  src={imgStudy}
                  alt="Study with ExamDash"
                  className="max-w-[280px] sm:max-w-[320px] w-full h-auto object-contain drop-shadow-xl translate-y-3 sm:translate-y-4"
                />
              </div>
            </div>
          </div>

          {/* ── Step 6: Track Your Progress (Image Left, Text Right) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 md:order-1 flex justify-center">
              <div className="bg-[#F5F5F7] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 w-full flex items-end justify-center min-h-[340px] sm:min-h-[380px] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow">
                <img
                  src={imgProgress}
                  alt="Track Your Progress"
                  className="max-w-[280px] sm:max-w-[320px] w-full h-auto object-contain drop-shadow-xl translate-y-3 sm:translate-y-4"
                />
              </div>
            </div>
            <div className="order-2 md:order-2 text-start md:text-end md:max-w-[543px] flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-roboto font-semibold sm:font-bold text-gray-900 mb-3">
                Track Your Progress
              </h3>
              <p className="text-gray-500 text-sm font-poppins sm:text-[15px] leading-relaxed">
                Progress shows completed activities, performance changes and readiness history
                over time. After completing an activity, ExamDash helps you see whether performance
                improved, whether a weak area changed and what the updated result means.
              </p>
            </div>
          </div>

        </div>
      </section>

      <hr className="border-gray-500" />

      {/* ── CTA BANNER SECTION: START WITH A CLEARER PICTURE ── */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 md:mt-10 mb-12 sm:mb-16">
        <div className="relative rounded-[18px] sm:rounded-[16px] overflow-hidden min-h-[380px] sm:min-h-[583px] flex flex-col justify-center items-center text-center p-6 sm:p-12 shadow-2xl">
          {/* Background photo */}
          <img
            src={heroBg}
            alt="ExamDash Readiness Experience"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
          {/* Cinematic dark overlay */}
          <div className="absolute inset-0 bg-black/65 pointer-events-none" />

          {/* Centered Typography & CTA */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] max-w-[880px] font-semibold sm:font-bold text-white leading-tight mb-3 sm:mb-4 drop-shadow-md">
              Start With a Clearer Picture.
            </h2>
            <p className="text-white/85 text-xs sm:text-sm font-poppins md:text-[20px] max-w-[652px] mb-7 sm:mb-8 leading-relaxed drop-shadow">
              You are already investing efforts in your examination. ExamDash helps you understand what that effort is producing.
            </p>
            <Link
              to="/waitlist"
              className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-semibold font-poppins text-[20px] px-12 py-3 rounded-full shadow-md transition-all duration-200"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-gray-600" />
    </div>
  );
}
