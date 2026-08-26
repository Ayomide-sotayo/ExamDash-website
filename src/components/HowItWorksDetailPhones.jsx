import React from "react";
import floatingLogo from "../assets/floatinglogo.png";

/**
 * Clean standard phone frame
 */
function PhoneFrame({ children, className = "", innerBg = "bg-[#FAFAFC]" }) {
  return (
    <div
      className={`relative mx-auto w-[200px] sm:w-[220px] h-[320px] sm:h-[350px] bg-white rounded-[36px] border-[5px] border-gray-900 shadow-xl overflow-hidden flex flex-col select-none ${className}`}
    >
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e]" />
      </div>

      {/* Screen interior */}
      <div className={`w-full h-full flex flex-col pt-5 px-3 pb-2 justify-between ${innerBg}`}>
        {children}
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gray-900 rounded-full" />
    </div>
  );
}

/**
 * 1. Download the App: Phone Dock with ExamDash Rabbit Icon
 */
export function DownloadAppPhone() {
  return (
    <div className="relative mx-auto w-[220px] sm:w-[240px] h-[160px] sm:h-[180px] bg-gray-900 rounded-[28px] border-[4px] border-gray-800 shadow-xl overflow-hidden flex flex-col justify-end p-3 select-none">
      {/* Wallpaper glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900" />

      {/* App Dock Container */}
      <div className="relative z-10 bg-white/20 backdrop-blur-md rounded-2xl p-2 flex justify-around items-center border border-white/20 shadow-lg">
        {/* Phone app */}
        <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white text-base shadow-sm">
          📞
        </div>
        {/* ExamDash App Icon */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#FF5C3D] to-[#FF2C67] flex items-center justify-center p-1.5 shadow-md ring-2 ring-white/50">
          <img src={floatingLogo} alt="ExamDash" className="w-full h-full object-contain" />
        </div>
        {/* Message app */}
        <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white text-base shadow-sm">
          💬
        </div>
        {/* Browser app */}
        <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white text-base shadow-sm">
          🧭
        </div>
      </div>

      <div className="relative z-10 w-12 h-0.5 bg-white/40 rounded-full mx-auto mt-2" />
    </div>
  );
}

/**
 * 2. Create Your Account Phone
 */
export function CreateAccountPhone() {
  return (
    <PhoneFrame innerBg="bg-white">
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-800 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-800 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>

        <div className="px-0.5 mt-1">
          <div className="text-[11px] font-bold text-gray-900">Create Account</div>
          <div className="text-[7px] text-gray-400">Join ExamDash preparation</div>
        </div>

        {/* Input fields */}
        <div className="flex flex-col gap-1.5 mt-2">
          <div>
            <div className="text-[6px] text-gray-400 font-semibold mb-0.5">Full Name</div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-[8px] text-gray-800 font-medium">
              Alex Morgan
            </div>
          </div>
          <div>
            <div className="text-[6px] text-gray-400 font-semibold mb-0.5">Email Address</div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-[8px] text-gray-800 font-medium">
              alex@example.com
            </div>
          </div>
          <div>
            <div className="text-[6px] text-gray-400 font-semibold mb-0.5">Password</div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-[8px] text-gray-400">
              ••••••••••••
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] text-white text-[8px] font-bold py-2 rounded-full text-center mb-1 shadow-md">
        Sign Up Free
      </div>
    </PhoneFrame>
  );
}

/**
 * 3. Set Your Exam Goal Phone
 */
export function SetGoalPhone() {
  return (
    <PhoneFrame innerBg="bg-[#FAFAFC]">
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-800 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-800 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>

        <div className="px-0.5">
          <div className="text-[11px] font-bold text-gray-900">Choose Pathway</div>
          <div className="text-[7px] text-gray-400">Target your certification</div>
        </div>

        {/* Selected Exam Card */}
        <div className="bg-white rounded-xl p-2.5 border-2 border-rose-500 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-gray-900">PMP Certification</span>
            <span className="text-rose-500 text-[10px]">✓</span>
          </div>
          <p className="text-[7px] text-gray-500 mt-1">Project Management Professional</p>
          <div className="flex items-center gap-1 mt-2 text-[7px] text-gray-600 bg-gray-50 p-1 rounded">
            <span>📅 Exam Date:</span>
            <strong className="text-gray-900">Nov 15, 2026</strong>
          </div>
        </div>

        {/* Other option */}
        <div className="bg-white rounded-xl p-2.5 border border-gray-100 opacity-60">
          <div className="text-[9px] font-bold text-gray-800">CPA Exam Pathway</div>
          <div className="text-[7px] text-gray-400">Certified Public Accountant</div>
        </div>
      </div>

      <div className="bg-gray-900 text-white text-[8px] font-bold py-1.5 rounded-full text-center mb-1">
        Confirm Goal
      </div>
    </PhoneFrame>
  );
}

/**
 * 4. Take the Diagnostic Phone
 */
export function DiagnosticPhone() {
  return (
    <PhoneFrame innerBg="bg-[#FAFAFC]">
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-800 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-800 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>

        {/* Thumbs up result card */}
        <div className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] text-white rounded-2xl p-3 text-center shadow-md flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg mb-1">
            👍
          </div>
          <div className="text-[11px] font-black">You did it!</div>
          <p className="text-[7px] text-white/90 leading-tight mt-0.5">
            Initial diagnostic baseline mapped across 3 domains.
          </p>
          <div className="bg-white text-gray-900 text-[10px] font-black px-2.5 py-0.5 rounded-full mt-2">
            Score: 62 / 100
          </div>
        </div>

        <div className="bg-white rounded-xl p-2 border border-gray-100 shadow-2xs">
          <div className="text-[7px] font-bold text-gray-800">Weak Area Identified</div>
          <div className="text-[7px] text-rose-500 font-semibold mt-0.5">● Risk & Procurement</div>
        </div>
      </div>

      <div className="bg-gray-900 text-white text-[8px] font-bold py-1.5 rounded-full text-center mb-1">
        Generate Study Plan
      </div>
    </PhoneFrame>
  );
}

/**
 * 5. Study with ExamDash Phone
 */
export function StudyAppPhone() {
  return (
    <PhoneFrame innerBg="bg-[#FAFAFC]">
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-800 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-800 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>

        {/* Greeting & Banner */}
        <div className="flex justify-between items-center px-0.5">
          <div>
            <div className="text-[7px] text-gray-400">Hi, Divine</div>
            <div className="text-[10px] font-bold text-gray-900">Today's Tasks</div>
          </div>
          <span className="text-[7px] font-bold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded-full">
            🔥 10
          </span>
        </div>

        {/* Coral Score Card */}
        <div className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] text-white rounded-xl p-2 shadow-sm">
          <div className="flex justify-between items-center text-[7px] opacity-90">
            <span>Readiness Score</span>
            <span>65/100</span>
          </div>
          <div className="w-full bg-black/20 h-1 rounded-full mt-1 overflow-hidden">
            <div className="bg-white h-full w-[65%]" />
          </div>
        </div>

        {/* Task Tiles */}
        <div className="flex flex-col gap-1">
          <div className="bg-white rounded-lg p-1.5 border border-gray-100 flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-rose-50 text-rose-500 flex items-center justify-center text-[10px]">
              🎯
            </div>
            <div>
              <div className="text-[8px] font-bold text-gray-900">Risk Variance Drill</div>
              <div className="text-[6px] text-gray-400">10 questions • 8 mins</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white text-[8px] font-bold py-1.5 rounded-full text-center mb-1">
        Start Daily Practice
      </div>
    </PhoneFrame>
  );
}

/**
 * 6. Track Progress Phone
 */
export function TrackProgressPhone() {
  return (
    <PhoneFrame innerBg="bg-[#FAFAFC]">
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-800 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-800 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>

        <div className="px-0.5 flex justify-between items-center">
          <div className="text-[10px] font-bold text-gray-900">Readiness Trend</div>
          <span className="text-[7px] text-emerald-600 font-bold">Passed</span>
        </div>

        {/* Bar chart */}
        <div className="bg-white rounded-xl p-2 border border-gray-100 shadow-2xs">
          <div className="flex items-end justify-between gap-1 h-16 pt-1">
            {[30, 45, 52, 60, 68, 75, 85].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5 h-full justify-end">
                <div
                  className={`w-full rounded-t-xs ${
                    i === 6 ? "bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)]" : "bg-red-200"
                  }`}
                  style={{ height: `${(val / 90) * 100}%` }}
                />
                <span className="text-[5px] text-gray-400">W{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-50 text-emerald-800 rounded-lg p-1.5 text-center text-[7px] font-bold">
          ✓ Readiness Target Reached: 85/100
        </div>
      </div>

      <div className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] text-white text-[8px] font-bold py-1.5 rounded-full text-center mb-1 shadow-sm">
        Book Your Exam
      </div>
    </PhoneFrame>
  );
}
