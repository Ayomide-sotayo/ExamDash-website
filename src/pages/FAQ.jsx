import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";
import faqPhoneImg from "../assets/faq-phone.png";
import waitlistPhoto from "../assets/waitlist-photo.jpg";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 sm:py-5 text-left focus:outline-none group cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-roboto font-semibold text-gray-700 text-sm sm:text-base md:text-[30px] transition-colors pr-4">
          {question}
        </span>
        <span className="text-gray-700 text-[50px] font-light shrink-0 transition-colors">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="font-poppins pb-4 sm:pb-5 text-gray-500 text-xs sm:text-sm md:text-[20px] leading-relaxed pr-6">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "What is ExamDash and how does it work?",
      answer: (
        <div className="flex flex-col gap-3">
          <p>
            ExamDash is a professional exam-readiness platform that helps candidates assess their preparation for certification and licensing exams. Choose your exam pathway and complete a readiness check. ExamDash highlights areas needing attention and suggests the next activity. After each activity, you see changes that update your readiness.
          </p>
        </div>
      ),
    },
    {
      question: "Who is ExamDash designed for?",
      answer:
        "ExamDash is for candidates preparing for professional examinations supported by the platform. The first live beta pathway is for the PEBC Evaluating Examination.",
    },
    {
      question: "When will ExamDash be available to download?",
      answer:
        "The Android beta is available now via direct APK download. The website promotes the Android beta: other platforms' availability will be announced when confirmed. No general launch date exists in the deck. If the question implies one, supply it or reword the question.",
    },
    {
      question: "How much will ExamDash cost?",
      answer:
        "No pricing information exists anywhere in the deck - no plans, tiers, trial terms or beta pricing. This is one of the highest-intent questions on the page and it currently has no answer.",
    },
    {
      question: "What is ExamDash and how does it work?",
      answer:
      "The first live beta pathway supports candidates preparing for the PEBC Evaluating Exam. More pathways will launch when ready."
      ,
    },
    {
      question: "How does the Readiness Score work?",
      answer:
        "ExamDash analyzes your assessments and preparation activities readiness checks, mission and drill results, pathway coverage, repeated mistakes, and progress to create a structured readiness view. A readiness score indicates preparation, not a guaranteed exam result."
      ,
    },
    {
      question: "How is ExamDash different from other exam prep tools?",
      answer:
        "Question banks show correct answers. Videos explain concepts. Flashcards boost recall. Each helps but shows only part of your prep. ExamDash combines these signals to reveal more than just scores and tasks."
      ,
    },
    {
      question: "Is my personal data secure and private?",
      answer:
        "ExamDash manages personal and study data per its Privacy Policy, detailing collected info, usage, and user rights. Security details aren't included; the policy doesn't guarantee encryption or storage. Avoid security claims without engineering approval."
      ,
    },
    {
      question: "Can I use ExamDash offline?",
      answer:
        "No offline capability is described anywhere in the deck. Needs a factual answer from engineering.",
    },
    {
      question: "How long does it take to set up my study plan?",
      answer:
        "Setup has two steps: choose your exam and add your target date, then do a readiness check so ExamDash highlights key areas. The deck lacks duration. Provide the readiness check time or remove the timing promise.",
    },
  ];

  return (
    <div className="bg-[#FCFCFC] text-gray-900 font-sans overflow-x-hidden pt-32 sm:pt-40 pb-16">
      {/* ── TOP SECTION (Heading Left + Phone Right) ───────────────── */}
      <section className="w-full md:max-w-[1157px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-[52px] font-semibold sm:font-semibold font-gluten text-gray-700 leading-tight mb-4">
              Questions Before
              <br />
              You Start?
            </h1>
            <p className="text-gray-500 text-xs font-poppins sm:text-sm md:text-base leading-relaxed max-w-md">
              Find answers about exam readiness, the PEBC beta pathway, ExamDash
              features, Android installation, privacy and support.
            </p>
          </div>

          {/* Right Column (Phone Graphic Card) */}
          <div className="flex justify-center items-center sm:max-w-[512px] sm:h-[345px]">
            <img
              src={faqPhoneImg}
              alt="ExamDash FAQ Preview"
              className="w-full max-w-[340px]  md:max-w-[480px] h-auto  object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION LIST ───────────────────────────── */}
      <section className="w-full max-w-[1157px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-20 sm:mb-28">
        <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xs border border-gray-100/80">
          <div className="flex flex-col divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO CTA BOTTOM SECTION ─────────────────────── */}
      <section className="w-full max-w-[1228px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-12 sm:mb-16">
        <div className="relative rounded-[16px] sm:rounded-[16px]  overflow-hidden min-h-[901px] sm:min-h-[583px] flex flex-col justify-center items-center text-center p-6 sm:p-10 md:p-14 shadow-2xl">
          {/* Background photo */}
          <img
            src={waitlistPhoto}
            alt="ExamDash Readiness Experience"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
          {/* Cinematic dark overlay */}
          <div className="absolute inset-0 bg-black/65 pointer-events-none" />

          {/* Centered Typography & CTA */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center md:-mb-56">
            <h2 className="text-2xl sm:text-[48px]  font-semibold sm:font-medium md:w-[880px] text-white leading-tight mb-3 sm:mb-4 drop-shadow-md">
              Start With a Clearer Picture.
            </h2>
            <p className="text-white/85 text-xs font-poppins1 md:font-poppins sm:text-[46px] max-w-[336px] sm:max-w-[652px] mb-7 sm:mb-8 leading-relaxed drop-shadow">
              You are already investing effort in your examination.
              <br className="hidden md:inline-block" />
              ExamDash helps you understand what that effort is producing.
            </p>
            <Link
              to="/waitlist"
              className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm md:text-base px-8 sm:px-10 py-3 sm:py-3.5 rounded-full shadow-xl transition-all duration-200"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
