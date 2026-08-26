import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";
import featuresPhonesImg from "../assets/features-phones.png";
import imgRecallDash from "../assets/feature-recalldash.png";
import imgDrillMode from "../assets/feature-drillmode.png";
import imgPatientChart from "../assets/feature-patientchart.png";
import imgBestNextStep from "../assets/feature-bestnextstep.png";
import imgReadiness from "../assets/feature-readiness.png";

export default function Features() {
  return (
    <div className="bg-[#FCFCFC] text-gray-900 font-sans overflow-x-hidden pt-32 sm:pt-44 pb-16">
      {/* ── HEADER & HERO MOCKUPS (# Features) ───────────── */}
      <section className="w-full  md:pb-28 mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="text-center mx-auto mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-fredoka font-semibold text-gray-900 leading-[1.18] mb-4">
            More Than Study Tools. A
            <br className="hidden sm:inline" /> Connected Readiness Experience.
          </h1>
          <p className="text-gray-500 text-sm sm:max-w-lg md:max-w-[734px] sm:text-base lg:text-[20.58px] font-poppins font-normal leading-relaxed mx-auto mb-8 sm:mb-10 drop-shadow">
            Every part of ExamDash supports the same goal: helping you
            understand and improve your preparation for a professional exam.
          </p>
          <div className="flex justify-center">
            <a
              href="#explore"
              className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-semibold font-poppins text-sm sm:text-base md:text-[20px] px-8 sm:px-12 py-3.5 sm:py-4 rounded-full shadow-md transition-all duration-200"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Showcase Card Frame with exact Figma floating background card & overlapping 3D phones */}
        <div id="explore" className="relative w-full max-w-[1180px] h-[320px] sm:h-[391px]  mx-auto flex items-end justify-center mt-6 sm:mt-48">
          {/* Gray background frame (shorter than phones, positioned at bottom) */}
          <div className="absolute  left-1/2 -translate-x-1/2 w-[92%] max-w-[986px] h-[65%] sm:h-[391px]  bg-[#F2F2F2] rounded-[10px] sm:rounded-[16px] border border-gray-200/80 shadow-2xs z-0 -mb-6 sm:-mb-6" />
          <div className="absolute  left-1/2 -translate-x-1/2 w-[70%] max-w-[786px] h-[25px] sm:h-[81px]  bg-[#F2F2F2]   z-20 -mb-6 sm:-mb-6" />

          {/* Phone image (aligned to bottom, extending higher than the gray frame) */}
          <div className="relative z-10 w-full h-full flex items-end scale-y-125 sm:scale-y-125 justify-center pointer-events-none">
            <img
              src={featuresPhonesImg}
              alt="ExamDash Connected Readiness"
              className="w-full max-w-[340px] sm:max-w-[560px] md:max-w-[1179px] scale-x-150 md:scale-x-125 lg:max-w-[880px] h-full sm:h-[544px] object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <hr className="border border-gray-300 mb-10 sm:mb-32 mt-14 sm:mt-0"/>

      {/* ── 5 FEATURE ROWS (# Desktop - 13) ────────────────── */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="flex flex-col gap-16 sm:gap-24 md:gap-32">

          {/* ── Row 1: RecallDash (Phone Left, Text Right) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 md:order-1 flex justify-center">
              <div className="bg-[#F5F5F7] border-2 border-gray-200 rounded-[16px]  sm:rounded-[16px] p-6 sm:p-10 w-full flex items-center justify-center min-h-[340px] sm:min-h-[400px] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow">
                <img
                  src={imgRecallDash}
                  alt="RecallDash"
                  className="max-h-[340px] sm:max-h-[400px] md:max-h-[460px] w-full -mb-10  object-contain drop-shadow-xl"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <h3 className="text-2xl md:text-end font-roboto sm:text-3xl font-semibold sm:font-bold text-gray-900 md:max-w-[560px] mb-3">
                RecallDash
              </h3>
              <p className="text-gray-500 md:text-end text-sm sm:text-[15px] lg:text-[20px] tracking-widest font-poppins leading-relaxed sm:max-w-lg md:max-w-[560px]">
                Not every weakness needs a full test. Some need fast
                interpretation, reading patient info, or choosing the next step.
                RecallDash offers a shorter way to reinforce recall while
                staying connected to key exam facts and relative values.
              </p>
            </div>
          </div>

          {/* ── Row 2: Drill Mode (Text Left, Phone Right) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-semibold sm:font-bold text-gray-900 mb-3">
                Drill Mode
              </h3>
              <p className="text-gray-500 text-sm sm:text-[15px] lg:text-[20px] tracking-widest font-poppins leading-relaxed sm:max-w-lg md:max-w-[560px]">
                Knowing an answer looks familiar is not the same as choosing it
                under pressure. Drill results contribute to the readiness
                picture rather than disappearing as an isolated score.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="bg-[#F5F5F7] border-2 border-gray-200 rounded-[16px]  sm:rounded-[16px] p-6 sm:p-10 w-full flex items-center justify-center min-h-[340px] sm:min-h-[400px] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow">
                <img
                  src={imgDrillMode}
                  alt="Drill Mode"
                  className="max-h-[340px] sm:max-h-[400px] md:max-h-[460px] w-full object-contain -mb-10 drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* ── Row 3: Patient Chart (Phone Left, Text Right) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 md:order-1 flex justify-center">
              <div className="bg-[#F5F5F7] border-2 border-gray-200 rounded-[16px]  sm:rounded-[16px] p-6 sm:p-10 w-full flex items-center justify-center min-h-[340px] sm:min-h-[400px] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow">
                <img
                  src={imgPatientChart}
                  alt="Patient Chart"
                  className="max-h-[340px] sm:max-h-[400px] md:max-h-[460px] w-full -mb-10 object-contain drop-shadow-xl"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <h3 className="text-2xl md:text-end font-roboto sm:text-3xl font-semibold sm:font-bold text-gray-900 md:max-w-[560px] mb-3">
                Patient Chart
              </h3>
              <p className="text-gray-500 md:text-end text-sm sm:text-[15px] lg:text-[20px] tracking-widest font-poppins leading-relaxed sm:max-w-lg md:max-w-[560px]">
                Some exams test application in context. Patient Chart builds
                interpretation, not just recall: reading patient data and
                identifying the clinical findings that matter most.
              </p>
            </div>
          </div>

          {/* ── Row 4: Best Next Step (Text Left, Phone Right) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-semibold sm:font-bold text-gray-900 mb-3">
                Best Next Step
              </h3>
              <p className="text-gray-500 text-sm sm:text-[15px] lg:text-[20px] tracking-widest font-poppins leading-relaxed sm:max-w-lg md:max-w-[560px]">
                Choosing what to do next requires judgment, not just fact
                recall. Best Next Step practices decision-making under pressure
                for weaker areas that don't need another full practice test.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="bg-[#F5F5F7] border-2 border-gray-200 rounded-[16px]  sm:rounded-[16px] p-6 sm:p-10 w-full flex items-center justify-center min-h-[340px] sm:min-h-[400px] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow">
                <img
                  src={imgBestNextStep}
                  alt="Best Next Step"
                  className="max-h-[340px] sm:max-h-[400px] md:max-h-[460px] w-full object-contain -mb-10 drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* ── Row 5: Readiness Score (Phone Left, Text Right) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 md:order-1 flex justify-center">
              <div className="bg-[#F5F5F7] border-2 border-gray-200 rounded-[16px]  sm:rounded-[16px] p-6 sm:p-10 w-full flex items-center justify-center min-h-[340px] sm:min-h-[400px] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow">
                <img
                  src={imgReadiness}
                  alt="Readiness Score"
                  className="max-h-[340px] sm:max-h-[400px] md:max-h-[460px] w-full object-contain -mb-10 drop-shadow-xl"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <h3 className="text-2xl md:text-end font-roboto sm:text-3xl font-semibold sm:font-bold text-gray-900 md:max-w-[560px] mb-3">
                Readiness Score
              </h3>
              <p className="text-gray-500 md:text-end text-sm sm:text-[15px] lg:text-[20px] tracking-widest font-poppins leading-relaxed sm:max-w-lg md:max-w-[560px]">
                The readiness overview shows your current preparation, weak areas, recent changes, and recommended next steps. It updates with new assement, practice, or progress data. It indicates preparation, not exam result
              </p>
            </div>
          </div>

        </div>
      </section>

      <hr className="border-t border-gray-300" />

      {/* ── CTA BANNER SECTION: USE THE RIGHT ACTIVITY... ── */}
      <section className="w-full pt-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="relative rounded-[18px] sm:rounded-[16px] overflow-hidden min-h-[380px] sm:min-h-[583px] flex flex-col justify-center items-center text-center p-6 sm:p-12 shadow-2xl">
          {/* Background photo */}
          <img
            src={heroBg}
            alt="ExamDash Activity Focus"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
          {/* Cinematic dark overlay */}
          <div className="absolute inset-0 bg-black/65 pointer-events-none" />

          {/* Centered Typography & CTA */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold sm:font-bold text-white leading-tight mb-3 sm:mb-4 drop-shadow-md">
              Use the Right Activity for the
              <br />
              Weakness in Front of You.
            </h2>
            <p className="text-white/85 text-xs sm:text-sm md:text-base max-w-lg mb-7 sm:mb-8 leading-relaxed drop-shadow">
              Begin by assessing your readiness, take a meaningful and
              relevant action, and observe the positive changes that follow.
            </p>
            <Link
              to="/waitlist"
              className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-semibold font-poppins text-[20px] px-12 py-3 rounded-full shadow-xl transition-all duration-200"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
