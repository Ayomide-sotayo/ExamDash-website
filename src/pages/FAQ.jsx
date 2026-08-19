import React, { useState } from "react";
import PhoneMockup from "../components/PhoneMockup";
import { Section } from "../components/Shared";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 text-base md:text-lg">
          {question}
        </span>
        <span className="text-gray-900 text-2xl font-light ml-4">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 text-sm md:text-base leading-relaxed pr-8">
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
        <div className="flex flex-col gap-4">
          <p>
            ExamDash is a professional exam-readiness platform that helps
            candidates assess how prepared they are for supported professional
            certification and licensing examinations.
          </p>
          <p>
            Start by choosing your exam pathway and completing a readiness
            check. ExamDash then surfaces the areas that need attention and
            recommends a suitable next activity. After each activity, you see
            what changed and that feeds back into the readiness loop.
          </p>
        </div>
      ),
    },
    {
      question: "Who is ExamDash designed for?",
      answer:
        "ExamDash is designed for ambitious professionals seeking to pass rigorous certification and licensing exams with confidence, eliminating guesswork from their preparation strategy.",
    },
    {
      question: "When will ExamDash be available to download?",
      answer:
        "We are currently in a closed beta phase for select pathways. Public launch dates will be announced to our waitlist first.",
    },
    {
      question: "How much will ExamDash cost?",
      answer:
        "Pricing details will be released closer to our public launch. We aim to offer flexible plans that provide maximum value for your exam preparation.",
    },
    {
      question: "How does the Readiness Score work?",
      answer:
        "The Readiness Score is a dynamic metric calculated using spacing algorithms, your performance in drills, mock exams, and self-assessments. It continuously updates to reflect your true preparedness level.",
    },
    {
      question: "How is ExamDash different from other exam prep tools?",
      answer:
        "While traditional tools focus solely on providing content, ExamDash focuses on your *readiness*. We guide you on exactly what to study and when, adapting to your specific weaknesses.",
    },
    {
      question: "Is my personal data secure and private?",
      answer:
        "Yes, we adhere to strict privacy protocols. Your data is encrypted and only used to improve your personal study pathway and application experience.",
    },
    {
      question: "Can I use ExamDash offline?",
      answer:
        "Current beta versions require an internet connection, but we are exploring offline capabilities for key drill sets and flashcards in future updates.",
    },
    {
      question: "How long does it take to set up my study plan?",
      answer:
        "Setup takes less than 5 minutes. Once you select your exam and take the initial diagnostic, your personalized path is automatically generated.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden pt-24 pb-16">
      {/* ── TOP SECTION (Heading + Phone) ───────────────── */}
      <Section className="py-0 md:py-0 mb-20 md:mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900">
              Questions Before
              <br />
              You Start?
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm max-w-md">
              Find answers about exam readiness, the PEBC beta pathway, ExamDash
              features, Android installation, privacy and support.
            </p>
          </div>

          {/* Right Column (Phone in Grey Box) - matches waitlist style */}
          <div className="bg-gray-50 rounded-[40px] p-8 flex items-center justify-center min-h-[400px] overflow-hidden">
            <div className="rotate-12 translate-y-12">
              <PhoneMockup screenBg="bg-white" className="shadow-2xl" />
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ACCORDION LIST ───────────────────────────── */}
      <Section className="py-0 md:py-0 mb-32">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-[0_4px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100">
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* ── PHOTO CTA BOTTOM SECTION ─────────────────────── */}
      <Section className="py-0 md:py-0">
        <div className="relative rounded-[40px] overflow-hidden max-w-6xl mx-auto min-h-[400px] flex items-center justify-center text-center px-4">
          {/* Background image placeholder */}
          <div className="absolute inset-0 bg-slate-900">
            <div className="absolute inset-0 bg-black/50 z-10" />
          </div>

          <div className="relative z-20 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start With a Clearer Picture.
            </h2>
            <p className="text-gray-200 text-sm mb-8">
              You are already investing effort in your examination.
              <br />
              ExamDash helps you understand what that effort is producing.
            </p>
            <button className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:shadow-lg transition-all border-0 text-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors">
              Join the waitlist
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
