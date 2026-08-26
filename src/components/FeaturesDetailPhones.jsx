import React from "react";
import floatingLogo from "../assets/floatinglogo.png";

/**
 * Standard Phone Mockup Frame for Features Detailed Rows
 */
function PhoneDetailFrame({ children, className = "" }) {
  return (
    <div
      className={`relative mx-auto w-[200px] sm:w-[220px] h-[320px] sm:h-[350px] bg-white rounded-[36px] border-[5px] border-gray-900 shadow-xl overflow-hidden flex flex-col select-none ${className}`}
    >
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e]" />
      </div>

      {/* Screen container */}
      <div className="w-full h-full flex flex-col pt-5 px-3 pb-2 justify-between">
        {children}
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gray-900 rounded-full" />
    </div>
  );
}

/**
 * 1. RecallDash Phone (Dark UI with 3 stat tiles)
 */
export function RecallDashPhone() {
  return (
    <PhoneDetailFrame className="bg-[#181B24] text-white">
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-400 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-600 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-300" />
          </div>
        </div>

        {/* Header with Logo */}
        <div className="flex flex-col items-center justify-center mt-2">
          <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center p-1.5 shadow-inner">
            <img src={floatingLogo} alt="ExamDash" className="w-full h-full object-contain" />
          </div>
          <div className="text-[11px] font-bold text-white mt-1.5">Recall Dash</div>
          <div className="text-[7px] text-gray-400">Targeted active memory</div>
        </div>

        {/* 3 Horizontal Stat Cards */}
        <div className="grid grid-cols-3 gap-1 mt-2">
          <div className="bg-[#242835] rounded-xl p-1.5 text-center border border-white/5">
            <div className="text-[10px] font-black text-rose-400">5,739</div>
            <div className="text-[5px] text-gray-400">Answered</div>
          </div>
          <div className="bg-[#242835] rounded-xl p-1.5 text-center border border-white/5">
            <div className="text-[10px] font-black text-sky-400">10/100</div>
            <div className="text-[5px] text-gray-400">Level</div>
          </div>
          <div className="bg-[#242835] rounded-xl p-1.5 text-center border border-white/5">
            <div className="text-[10px] font-black text-amber-400">31</div>
            <div className="text-[5px] text-gray-400">Streak</div>
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] text-white text-[8px] font-bold py-1.5 rounded-full text-center mb-1">
        Start Rapid Recall
      </div>
    </PhoneDetailFrame>
  );
}

/**
 * 2. Drill Mode Phone (Light UI with Orange question pill & prompt)
 */
export function DrillModePhone() {
  return (
    <PhoneDetailFrame className="bg-[#FAFAFC] text-gray-900">
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-800 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-800 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>

        {/* Title */}
        <div className="flex justify-between items-center px-0.5">
          <div className="text-[10px] font-bold text-gray-900">Drill Mode</div>
          <span className="text-[7px] font-bold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded-full">
            Question 3 of 10
          </span>
        </div>

        {/* Question Prompt */}
        <div className="bg-white rounded-xl p-2.5 border border-gray-100 shadow-2xs">
          <div className="text-[7px] text-rose-500 font-bold mb-0.5">Pharmacology & Actions</div>
          <p className="text-[8px] text-gray-800 font-medium leading-tight">
            Which drug is an endogenous agonist at beta-1 receptors in myocardial tissue?
          </p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-1">
          {["A. Dobutamine", "B. Epinephrine", "C. Norepinephrine", "D. Isoproterenol"].map(
            (opt, i) => (
              <div
                key={opt}
                className={`text-[8px] py-1.5 px-2 rounded-lg border font-medium ${
                  i === 1
                    ? "bg-rose-50 border-rose-300 text-rose-700"
                    : "bg-white border-gray-100 text-gray-600"
                }`}
              >
                {opt}
              </div>
            )
          )}
        </div>
      </div>

      <div className="bg-gray-900 text-white text-[8px] font-bold py-1.5 rounded-full text-center mb-1">
        Submit Answer
      </div>
    </PhoneDetailFrame>
  );
}

/**
 * 3. Patient Chart Phone (Light UI with clinical case scenario & doctor avatars)
 */
export function PatientChartPhone() {
  return (
    <PhoneDetailFrame className="bg-[#FAFAFC] text-gray-900">
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-800 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-800 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>

        {/* Header */}
        <div className="px-0.5">
          <div className="text-[10px] font-bold text-gray-900">Patient Chart</div>
          <div className="text-[7px] text-gray-400">Clinical Case Interpretation</div>
        </div>

        {/* Chart card */}
        <div className="bg-white rounded-xl p-2.5 border border-gray-100 shadow-2xs flex flex-col gap-1.5">
          <div className="flex justify-between items-center border-b border-gray-100 pb-1">
            <span className="text-[8px] font-bold text-gray-800">54yo Male • Bed 4</span>
            <span className="text-[6px] bg-red-100 text-red-700 font-bold px-1 py-0.5 rounded">
              STAT
            </span>
          </div>
          <p className="text-[7px] text-gray-600 leading-tight">
            <strong>Chief Complaint:</strong> Acute substernal chest pressure radiating to left jaw
            for 45 mins. BP 142/88, HR 96.
          </p>
          <div className="bg-gray-50 rounded-lg p-1.5 text-[6px] text-gray-500">
            ECG shows ST-elevation in leads II, III, aVF.
          </div>
        </div>

        {/* Doctor avatars */}
        <div className="flex items-center gap-2 bg-white rounded-xl p-2 border border-gray-100">
          <div className="flex -space-x-1.5">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 border border-white flex items-center justify-center text-white text-[8px] font-bold">
              👨‍⚕️
            </div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-rose-400 to-amber-400 border border-white flex items-center justify-center text-white text-[8px] font-bold">
              👩‍⚕️
            </div>
          </div>
          <span className="text-[7px] text-gray-500 font-medium">Interacting clinical panel</span>
        </div>
      </div>

      <div className="bg-gray-900 text-white text-[8px] font-bold py-1.5 rounded-full text-center mb-1">
        Begin Case Study
      </div>
    </PhoneDetailFrame>
  );
}

/**
 * 4. Best Next Step Phone (Dark forest green UI with decision choices)
 */
export function BestNextStepPhone() {
  return (
    <PhoneDetailFrame className="bg-[#142623] text-white">
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-400 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-600 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-300" />
          </div>
        </div>

        {/* Header */}
        <div className="px-0.5">
          <div className="text-[10px] font-bold text-white">Best Next Step</div>
          <div className="text-[7px] text-emerald-400">Judgment under pressure</div>
        </div>

        {/* Prompt Card */}
        <div className="bg-[#1B3632] rounded-xl p-2.5 border border-emerald-500/20">
          <div className="text-[7px] text-emerald-300 font-bold mb-0.5">Scenario</div>
          <p className="text-[8px] text-gray-200 leading-tight">
            Patient with acute COPD exacerbation does not improve on first-line bronchodilators.
            What is the best next step?
          </p>
        </div>

        {/* Action Choice Buttons */}
        <div className="flex flex-col gap-1">
          {[
            "Initiate non-invasive BiPAP ventilation",
            "Administer IV corticosteroid bolus",
            "Immediate endotracheal intubation",
          ].map((action, i) => (
            <div
              key={action}
              className={`text-[7px] py-1.5 px-2 rounded-lg border font-semibold ${
                i === 0
                  ? "bg-emerald-600/30 border-emerald-400/50 text-emerald-200"
                  : "bg-[#1E3B37] border-white/5 text-gray-300"
              }`}
            >
              {action}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-500 text-gray-950 text-[8px] font-black py-1.5 rounded-full text-center mb-1">
        Confirm Choice
      </div>
    </PhoneDetailFrame>
  );
}

/**
 * 5. Readiness Score Phone (Light UI with Coral Header and performance breakdown)
 */
export function ReadinessScorePhone() {
  return (
    <PhoneDetailFrame className="bg-[#FAFAFC] text-gray-900">
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-800 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-800 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>

        {/* Coral Readiness Banner */}
        <div className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] text-white rounded-xl p-2.5 shadow-sm">
          <div className="flex justify-between items-center text-[7px] opacity-90">
            <span>Readiness Score</span>
            <span className="bg-white/20 px-1 py-0.5 rounded-full text-[6px] font-bold">Passed</span>
          </div>
          <div className="text-xl font-black mt-0.5">85 / 100</div>
          <div className="text-[7px] text-white/90">Exam Ready Threshold Reached!</div>
        </div>

        {/* Breakdown by Domain */}
        <div className="bg-white rounded-xl p-2 border border-gray-100 shadow-2xs flex flex-col gap-1.5">
          <div className="text-[8px] font-bold text-gray-900">Domain Performance</div>
          {[
            { label: "Clinical Knowledge", pct: 88, color: "bg-emerald-500" },
            { label: "Critical Reasoning", pct: 82, color: "bg-emerald-500" },
            { label: "Recall Speed", pct: 79, color: "bg-amber-500" },
          ].map((d) => (
            <div key={d.label}>
              <div className="flex justify-between text-[6px] text-gray-500 mb-0.5">
                <span>{d.label}</span>
                <span className="font-bold">{d.pct}%</span>
              </div>
              <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                <div className={`${d.color} h-full rounded-full`} style={{ width: `${d.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 text-white text-[8px] font-bold py-1.5 rounded-full text-center mb-1">
        Book Your Exam
      </div>
    </PhoneDetailFrame>
  );
}
