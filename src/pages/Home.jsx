import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";
import imgHowHome from "../assets/home-how-home.png";
import imgHowPacks from "../assets/home-how-packs.png";
import imgHowDrill from "../assets/home-how-drill.png";
import imgHowDrill1 from "../assets/home-how-drill1.png";
import imgHowGames from "../assets/home-how-games.png";
import imgHowProgress from "../assets/home-how-progress.png";
import imgPathwayPhone from "../assets/home-pathway-phone.png";
import imgDiagnostic from "../assets/how-diagnostic.png";
import imgHomeBenefits from "../assets/waitlist-phone-ui.png";
import imgHomeCreateAccount from "../assets/how-create-account.png";
import imgHomeCovered from "../assets/home-covered.png";
import imgHomeScoresMean from "../assets/home-scores-mean.png";

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  const pathwaySteps = [
    {
      step: "01",
      title: "Choose your exam",
      desc: "Choose your exam and set your target date ExamDash organizes your preparation accordingly.",
      image: imgPathwayPhone,
    },
    {
      step: "02",
      title: "Create Your Account",
      desc: "ExamDash manages personal and study data per its Privacy Policy, detailing collected info, usage, and user rights.",
      image: imgHomeCreateAccount,
    },
    {
      step: "03",
      title: "Set Your Exam Goal",
      desc: "Choose your professional exam and set your target date. ExamDash uses this to organize your prep and track progress over time.",
      image: imgHowDrill,
    },
    {
      step: "04",
      title: "Start Studying",
      desc: "Complete an initial readiness check so ExamDash highlights areas needing attention. It's not a pass guarantee but the start of a readiness picture that grows as you prepare.",
      image: imgHowPacks,
    },
  ];

  const isTransitioningRef = useRef(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const handleWheel = (e) => {
      const rect = sectionEl.getBoundingClientRect();
      const isInView = rect.top <= 160 && rect.bottom >= window.innerHeight - 160;

      if (!isInView) return;

      if (isTransitioningRef.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 15) {
        if (activeStep < pathwaySteps.length - 1) {
          e.preventDefault();
          isTransitioningRef.current = true;
          setActiveStep((prev) => prev + 1);
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 450);
        }
      } else if (e.deltaY < -15) {
        if (activeStep > 0) {
          e.preventDefault();
          isTransitioningRef.current = true;
          setActiveStep((prev) => prev - 1);
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 450);
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const rect = sectionEl.getBoundingClientRect();
      const isInView = rect.top <= 120 && rect.bottom >= window.innerHeight - 120;
      if (!isInView) return;

      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 35 && !isTransitioningRef.current) {
        if (diff > 0 && activeStep < pathwaySteps.length - 1) {
          e.preventDefault();
          isTransitioningRef.current = true;
          setActiveStep((prev) => prev + 1);
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 450);
        } else if (diff < 0 && activeStep > 0) {
          e.preventDefault();
          isTransitioningRef.current = true;
          setActiveStep((prev) => prev - 1);
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 450);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeStep, pathwaySteps.length]);

  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden pt-20 sm:pt-24">
      {/* ── HERO SECTION ────────────────────────────────── */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 mb-10 sm:mb-16">
        <div className="relative rounded-[12px] sm:rounded-[20px] overflow-hidden min-h-[560px] sm:min-h-[640px] md:min-h-[700px] flex flex-col justify-end items-center text-center p-6 sm:p-12 md:p-16 shadow-2xl">
          {/* Background image showing hands holding phone with ExamDash app */}
          <img
            src={heroBg}
            alt="ExamDash Mobile App"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
          {/* Subtle darkness & gradient overlay for legibility */}
          <div className="absolute inset-0 bg-black/35 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

          {/* Hero text content */}
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[34px] xl:text-[52px] font-[48px] text-white leading-[1.14] tracking-normal drop-shadow-md mb-4 sm:mb-6">
              How Do You Know When You're
              <br className="hidden sm:inline" /> Ready for Your Professional Exam?
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-[25px] font-poppins font-normal leading-relaxed mx-auto mb-8 sm:mb-10 drop-shadow">
              Studying harder doesn't tell you if you're prepared. ExamDash
              <br className="hidden sm:inline" /> shows you where you stand before exam day.
            </p>
            <div className="flex justify-center">
              <Link
                to="/waitlist"
                className="download-button bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-poppins font-semibold text-sm sm:text-base px-10 sm:px-12 py-4 rounded-full shadow-xl transition-all duration-200"
              >
                Download Android BETA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: YOU CAN STUDY FOR MONTHS... (# Desktop - 2) ── */}
      <section className="w-full bg-[#FCFCFC] py-14 sm:py-20 md:py-28 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          {/* Top Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] text-gray-900 tracking-normal leading-[1.18] drop-shadow-md">
              You Can Study for Months
              <br />
              and Still Not Know Whether
              <br />
              You're Ready.
            </h2>
            <div className="flex flex-col items-start md:items-end gap-5">
              <p className="text-gray-500 text-[18px] sm:text-base md:text-[22px] font-semibold leading-relaxed md:text-right">
                Professional exams need time, money, and sacrifice.
                <br className="hidden sm:inline" /> Candidates wonder: Am I ready, or just busy?
              </p>
              <Link
                to="/waitlist"
                className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-semibold text-sm sm:text-base px-9 sm:px-11 py-4 rounded-full shadow-xl transition-all duration-200"
              >
                Download Android BETA
              </Link>
            </div>
          </div>

          {/* Cards Grid: 2 Equal Side-by-Side Cards matching Figma */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Card: Partial Phone Crop */}
            <div className="grid grid-cols-1 gap-8">
              <div className="border-2 border-[#dedede] bg-[#f5f5f5] rounded-[32px] sm:rounded-[20px] pt-10 px-6 sm:px-10 pb-0 flex flex-col items-center justify-between overflow-hidden shadow-2xs hover:shadow-xs transition-shadow min-h-[460px] sm:min-h-[520px] lg:min-h-[560px]">
                <div className="max-w-md mx-auto flex flex-col gap-5 text-center mb-6">
                  <div className="w-full flex justify-center items-end">
                    <img
                      src={imgHomeCovered}
                      alt="ExamDash Benefits Dashboard"
                      className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] h-auto object-contain object-bottom drop-shadow-md"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold sm:font-bold text-gray-900 mb-3">
                    Benefits Examdash offer?
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-sm mx-auto">
                    ExamDash connects performance, weak areas and progress to
                    help you understand what your preparation adds up to.
                  </p>
                </div>

              </div>


              <div className="border-2 border-[#dedede] bg-[#f5f5f5] rounded-[32px] sm:rounded-[20px] pt-10 px-6 sm:px-10 pb-0 flex flex-col items-center justify-between overflow-hidden shadow-2xs hover:shadow-xs transition-shadow min-h-[460px] sm:min-h-[520px] lg:min-h-[560px]">
                <div className="max-w-md mx-auto text-center mb-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold sm:font-bold text-gray-900 mb-3">
                    Benefits Examdash offer?
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-sm mx-auto">
                    ExamDash connects performance, weak areas and progress to
                    help you understand what your preparation adds up to.
                  </p>
                </div>
                <div className="w-full flex justify-center items-end">
                  <img
                    src={imgHomeScoresMean}
                    alt="ExamDash Benefits Dashboard"
                    className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] h-auto object-contain object-bottom drop-shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Right Card: Benefits Examdash offer? with Partial Phone Crop */}
            <div className="border-2 border-[#dedede] bg-[#f5f5f5] rounded-[32px] sm:rounded-[20px] pt-10 px-6 sm:px-10 pb-5 flex flex-col items-center gap-5 overflow-hidden shadow-2xs hover:shadow-xs transition-shadow min-h-[460px] sm:min-h-[520px] lg:min-h-[560px]">
              <div className="max-w-md mx-auto text-center mb-6">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold sm:font-bold text-gray-900 mb-3">
                  Benefits Examdash offer?
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-sm mx-auto">
                  ExamDash connects performance, weak areas and progress to
                  help you understand what your preparation adds up to.
                </p>
              </div>
              <div className="w-full flex justify-center ">
                <img
                  src={imgHomeBenefits}
                  alt="ExamDash Benefits Dashboard"
                  className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] h-auto object-contain object-bottom drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW EXAMDASH WORKS (Desktop - 3: 5 Feature Rows) ──────────────── */}
      <section id="how-it-works" className="w-full bg-[#FCFCFC] py-16 sm:py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold sm:font-bold text-gray-900 leading-[1.18]">
                How Examdash works
              </h2>
              <p className="text-gray-500 text-sm sm:text-2xl font-semibold leading-relaxed mt-3">
                Your scores, weak areas and progress stop being separate
                <br className="hidden sm:inline" /> events and start telling a picture.
              </p>
            </div>

            <div>
              <Link
                to="/features"
                className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-semibold font-poppins text-[20px] px-12 py-3 rounded-full shadow-md transition-all duration-200"
              >
                Explore Features
              </Link>
            </div>
          </div>

          {/* 5 Alternating Feature Rows */}
          <div className="flex flex-col gap-16 sm:gap-24 lg:gap-16">

            {/* ── Row 1: Home (Text Left, Image Right) ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6 items-center">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
                  Home
                </h3>
                <p className="text-gray-500 text-sm sm:text-[15px] lg:text-[20px] tracking-widest font-poppins leading-relaxed sm:max-w-lg md:max-w-[560px]">
                  See your Readiness Overview, weak areas, resume drills and a
                  recommended next action when you open ExamDash instead of an
                  endless library.
                </p>
              </div>
              <div className="order-1 md:order-2 bg-[#f5f5f5] pb-36 border-[2px] rounded-[16px] flex justify-center items-center">
                <img
                  src={imgHowHome}
                  alt="ExamDash Home"
                  className="w-[399px] h-[410px] object-contain"
                />
              </div>
            </div>

            {/* ── Row 2: Packs & Missions (Image Left, Text Right on Desktop) ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 md:order-2 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl text-start md:text-end font-roboto font-semibold sm:font-bold md:max-w-[560px] text-gray-900 mb-3">
                  Packs & Missions
                </h3>
                <p className="text-gray-500 text-start md:text-end text-sm sm:text-[15px] lg:text-[20px] tracking-widest font-poppins leading-relaxed sm:max-w-lg md:max-w-[560px]">
                  Packs organise the exam pathway. Missions turn each area into a focused activity, so you make progress in manageable steps without
                  losing sight of the wider pathway.
                </p>
              </div>
              <div className="order-1 md:order-1 bg-[#f5f5f5] pt-36 border-[2px] rounded-[16px] flex justify-center items-center">
                <img
                  src={imgHowPacks}
                  alt="ExamDash Packs & Missions"
                  className="w-[399px] h-[412px] object-contain"
                />
              </div>
            </div>

            {/* ── Row 3: Drill (Text Left, Image Right) ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-roboto font-semibold sm:font-bold text-gray-900 mb-3">
                  Drill
                </h3>
                <p className="text-gray-500 text-sm sm:text-[15px] lg:text-[20px] tracking-widest font-poppins leading-relaxed sm:max-w-lg md:max-w-[560px]">
                  Knowing an answer looks familiar is not the same as choosing it
                  under pressure. Drill results contribute to the readiness picture
                  rather than disappearing as an isolated score.
                </p>
              </div>
              <div className="order-1 md:order-2 bg-[#f5f5f5] pt-36 border-[2px] rounded-[16px] flex justify-center items-center">
                <img
                  src={imgHowDrill1}
                  alt="ExamDash Drill"
                  className="w-[399px] h-[386px] object-contain"
                />
              </div>
            </div>

            {/* ── Row 4: Games (Image Left, Text Right on Desktop) ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 md:order-2 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl text-start md:text-end font-roboto font-semibold sm:font-bold text-gray-900 md:max-w-[560px] mb-3">
                  Games
                </h3>
                <p className="text-gray-500 text-start md:text-end text-sm sm:text-[15px] lg:text-[20px] tracking-widest font-poppins leading-relaxed sm:max-w-lg md:max-w-[560px]">
                  Recall that strengthens recall. Fast drill challenges build
                  interpretation, that warming up questions answering shorter
                  activities for weak areas that don't need another full practice
                  test.
                </p>
              </div>
              <div className="order-1 md:order-1 bg-[#f5f5f5] pb-36 border-[2px] rounded-[16px] flex justify-center items-center">
                <img
                  src={imgHowGames}
                  alt="ExamDash Games"
                  className="w-[399px] h-[410px] object-contain"
                />
              </div>
            </div>

            {/* ── Row 5: Progress (Text Left, Image Right) ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16   items-center">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-roboto font-semibold md:max-w-[560px] sm:font-bold text-gray-900 mb-3">
                  Progress
                </h3>
                <p className="text-gray-500 text-sm sm:text-[15px] lg:text-[20px] tracking-widest font-poppins leading-relaxed sm:max-w-lg md:max-w-[560px]">
                  A long streak can feel encouraging, but the more important
                  question is whether your preparation is changing. Progress shows
                  completed activities, performance changes and readiness
                  history.
                </p>
              </div>
              <div className="order-1 md:order-2 bg-[#f5f5f5] pt-36 border-[2px] rounded-[16px] flex justify-center items-center">
                <img
                  src={imgHowProgress}
                  alt="ExamDash Progress"
                  className="w-[399px] h-[413px] object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION: HOW EXAMDASH WORKS (Desktop - 4 Carousel Step Slider) ── */}
      <section ref={sectionRef} className="w-full bg-[#FCFCFC] py-16 sm:py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10 md:mb-14">
            <div className="flex flex-col gap-3 md:w-[65%]">
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold sm:font-semibold text-gray-900 leading-[1.18]">
                How Examdash works
              </h2>
              <p className="text-gray-500 text-sm sm:text-[15px] md:text-[20px] tracking-widest font-poppins leading-relaxed">
                Your scores, weak areas and progress stop being separate
                <br className="hidden sm:inline" /> events and start being a picture.
              </p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                to="/how-it-works"
                className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-semibold text-[20px] px-12 py-3 rounded-full shadow-md transition-all duration-200"
              >
                See More
              </Link>
            </div>
          </div>

          {/* Interactive Horizontal Tabs / Slider */}
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch">
            {pathwaySteps.map((stepItem, idx) => {
              const isActive = activeStep === idx;

              if (isActive) {
                return (
                  <div
                    key={idx}
                    className="flex-1 bg-black rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-10 shadow-2xl text-white transition-all duration-300 min-h-[380px]"
                  >
                    {/* Left: Exact Uploaded Phone Image */}
                    <div className="w-full md:w-[260px] lg:w-[280px] shrink-0 flex justify-center items-center">
                      <img
                        src={stepItem.image}
                        alt={stepItem.title}
                        className="w-full max-w-[260px] sm:max-w-[280px] h-auto object-contain drop-shadow-2xl transition-all duration-300"
                      />
                    </div>

                    {/* Right: Step Text */}
                    <div className="flex-1 flex flex-col justify-between self-stretch py-2 sm:py-4">
                      <div className="text-white text-lg sm:text-xl font-medium">
                        {stepItem.step}
                      </div>
                      <div className="mt-auto">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold text-white mb-2 leading-tight">
                          {stepItem.title}
                        </h3>
                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-md">
                          {stepItem.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="w-full md:w-16 lg:w-20 bg-[#F5F5F7] hover:bg-gray-200 rounded-[20px] sm:rounded-[24px] p-4 md:py-8 flex flex-row md:flex-col items-center justify-between md:justify-start cursor-pointer transition-all duration-200 shadow-2xs hover:shadow-xs group"
                >
                  <span className="text-gray-400 group-hover:text-gray-700 font-semibold text-base sm:text-lg">
                    {stepItem.step}
                  </span>
                  <span className="md:hidden text-xs font-semibold text-gray-600">
                    {stepItem.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA CARD SECTION: BUILT FOR PROFESSIONAL CERTIFICATION EXAMS ── */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[583px] flex flex-col justify-center items-center text-center p-6 sm:p-12 shadow-2xl">
          {/* Background image */}
          <img
            src={heroBg}
            alt="ExamDash Pro"
            className="absolute inset-0 w-full object-cover object-center pointer-events-none"
          />
          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-black/65 pointer-events-none" />

          {/* Centered CTA Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold sm:font-bold text-white mb-3 sm:mb-4 drop-shadow-md">
              Built for Professional
              <br />
              Certification Exams.
            </h2>
            <p className="text-white/85 text-xs font-poppins sm:max-w-lg md:max-w-[560px] sm:text-sm md:text-base max-w-lg mb-7 sm:mb-8 leading-relaxed drop-shadow">
              This live beta aids all candidates in preparing for the PEBC Evaluating Exam,
              with more pathways ahead.
            </p>
            <Link
              to="/waitlist"
              className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-semibold text-[20px] px-12 py-3 rounded-full shadow-md transition-all duration-200"
            >
              Explore PEBC Pathway
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
