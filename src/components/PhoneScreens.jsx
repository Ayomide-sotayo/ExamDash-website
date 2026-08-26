import React from "react";
import logo from "../assets/floatinglogo.png";

/**
 * Screen 1: Top half of phone showing Dashboard Readiness banner
 */
export function PhoneCoveredScreen({ className = "" }) {
  return (
    <div
      className={`relative mx-auto w-[220px] sm:w-[240px] h-[170px] sm:h-[185px] bg-white rounded-t-[32px] border-[5px] border-b-0 border-gray-900 shadow-lg overflow-hidden flex flex-col pt-2 px-3 select-none ${className}`}
    >
      {/* Dynamic Island Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e]" />
      </div>

      {/* Status Bar */}
      <div className="flex justify-between items-center text-[9px] font-semibold text-gray-800 px-1 pt-0.5 z-10">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-1.5 border border-gray-700 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>
      </div>

      {/* Screen Header */}
      <div className="flex justify-between items-center mt-2.5 px-0.5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 to-rose-400 flex items-center justify-center text-white text-[9px] font-bold">
            D
          </div>
          <div>
            <div className="text-[9px] text-gray-400 leading-tight">Hi, Daisy</div>
            <div className="text-[10px] font-bold text-gray-800 leading-tight">
              Ready to Study?
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="flex items-center text-[9px] font-bold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded-full">
            🔥 10
          </span>
        </div>
      </div>

      {/* Readiness Score Card */}
      <div className="mt-2 bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] rounded-xl p-2 text-white shadow-sm">
        <div className="flex justify-between items-center text-[9px] opacity-90">
          <span>Readiness Score</span>
          <span className="font-semibold text-white/90 text-[8px]">PMP Exam</span>
        </div>
        <div className="flex items-baseline gap-1 mt-0.5">
          <span className="text-lg font-black tracking-tight">65</span>
          <span className="text-[10px] font-medium opacity-80">/ 100</span>
        </div>
        {/* Progress bar */}
        <div className="w-full bg-white/30 h-1.5 rounded-full mt-1 overflow-hidden">
          <div className="bg-white h-full rounded-full w-[65%]" />
        </div>
      </div>

      {/* Peek of bottom section */}
      <div className="mt-2 px-0.5 opacity-60">
        <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
          Recommended for you
        </div>
        <div className="h-6 bg-gray-100 rounded-lg border border-gray-200" />
      </div>
    </div>
  );
}

/**
 * Screen 2: Phone screen showing Practice Quiz Results (8/10, 80%, etc.)
 */
export function PhoneScoresScreen({ className = "" }) {
  return (
    <div
      className={`relative mx-auto w-[220px] sm:w-[240px] h-[170px] sm:h-[185px] bg-white rounded-t-[32px] border-[5px] border-b-0 border-gray-900 shadow-lg overflow-hidden flex flex-col pt-2 px-3 select-none ${className}`}
    >
      {/* Dynamic Island Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e]" />
      </div>

      {/* Status Bar */}
      <div className="flex justify-between items-center text-[9px] font-semibold text-gray-800 px-1 pt-0.5 z-10">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-1.5 border border-gray-700 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>
      </div>

      {/* Screen Navigation */}
      <div className="flex items-center justify-between mt-2 px-0.5">
        <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-[9px]">
          ←
        </div>
        <span className="text-[11px] font-bold text-gray-800">Results</span>
        <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-[9px]">
          ↗
        </div>
      </div>

      {/* Main Score Badge */}
      <div className="flex flex-col items-center mt-1">
        <div className="w-10 h-10 rounded-full bg-emerald-50 border-2 border-emerald-400 flex flex-col items-center justify-center text-emerald-600 shadow-2xs">
          <span className="text-[12px] font-black leading-none">8/10</span>
        </div>
        <span className="text-[9px] font-semibold text-gray-500 mt-0.5">
          Session Completed
        </span>
      </div>

      {/* 3 Stats Row */}
      <div className="grid grid-cols-3 gap-1 mt-1.5 px-0.5 text-center">
        <div className="bg-gray-50 border border-gray-100 rounded-lg py-1 px-0.5">
          <div className="text-[11px] font-black text-gray-800">80%</div>
          <div className="text-[7px] text-gray-400 font-medium">Accuracy</div>
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-lg py-1 px-0.5">
          <div className="text-[11px] font-black text-gray-800">4:12</div>
          <div className="text-[7px] text-gray-400 font-medium">Time</div>
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-lg py-1 px-0.5">
          <div className="text-[11px] font-black text-gray-800">10</div>
          <div className="text-[7px] text-gray-400 font-medium">Questions</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Screen 3: Full standing Phone Mockup displaying complete ExamDash dashboard
 */
export function PhoneDashboardFull({ className = "" }) {
  return (
    <div
      className={`relative mx-auto w-[240px] sm:w-[260px] h-[490px] sm:h-[510px] bg-[#FAFAFC] rounded-[40px] border-[6px] border-gray-900 shadow-2xl overflow-hidden flex flex-col select-none ${className}`}
    >
      {/* Dynamic Island Notch */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
        <div className="w-2 h-2 rounded-full bg-[#1c1c1e]" />
      </div>

      {/* Phone Screen Interior */}
      <div className="w-full h-full flex flex-col pt-2.5 px-3 pb-2 justify-between">
        <div>
          {/* Status Bar */}
          <div className="flex justify-between items-center text-[9px] font-semibold text-gray-800 px-1 pt-0.5">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-2.5 h-2.5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z" />
              </svg>
              <div className="w-3.5 h-2 border border-gray-800 rounded-2xs p-0.5 flex items-center">
                <div className="w-full h-full bg-gray-900" />
              </div>
            </div>
          </div>

          {/* Top Header */}
          <div className="flex justify-between items-center mt-2 px-1">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-rose-400 flex items-center justify-center text-white text-[10px] font-bold shadow-2xs">
                D
              </div>
              <div>
                <div className="text-[9px] text-gray-400 leading-tight">Hi, Daisy</div>
                <div className="text-[11px] font-bold text-gray-900 leading-tight">
                  Ready to Study?
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="flex items-center text-[9px] font-bold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded-full border border-orange-100">
                🔥 10
              </span>
            </div>
          </div>

          {/* Countdown Banner */}
          <div className="mt-2 mx-0.5 bg-gray-900 text-white text-[9px] font-medium py-1 px-2.5 rounded-full flex items-center justify-between shadow-2xs">
            <span className="text-gray-300">Target Exam</span>
            <span className="text-rose-400 font-bold">11 Days left</span>
          </div>

          {/* Readiness Score Card */}
          <div className="mt-1.5 bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] rounded-xl p-2.5 text-white shadow-md">
            <div className="flex justify-between items-center text-[9px] opacity-90">
              <span className="font-medium">Readiness Score</span>
              <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded-full">Updated today</span>
            </div>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xl font-black tracking-tight">65</span>
              <span className="text-[10px] font-semibold opacity-85">/ 100</span>
            </div>
            <div className="w-full bg-white/25 h-1.5 rounded-full mt-1.5 overflow-hidden">
              <div className="bg-white h-full rounded-full w-[65%]" />
            </div>
          </div>

          {/* Recommended Section */}
          <div className="mt-2.5 px-0.5">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[9px] font-bold text-gray-900">Recommended for you</span>
              <span className="text-[8px] text-red-500 font-medium cursor-pointer">View all</span>
            </div>

            <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-2xs flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-red-50 flex items-center justify-center p-0.5 flex-shrink-0">
                <img src={logo} alt="Examdash" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold text-gray-900 truncate">
                  Diagnostic Assessment
                </div>
                <div className="text-[8px] text-gray-400">50 questions • 45 mins</div>
              </div>
              <div className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-[8px] font-bold flex-shrink-0">
                ▶
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-1.5 mt-2 px-0.5">
            <div className="bg-white p-1.5 rounded-lg border border-gray-100 shadow-2xs">
              <div className="text-[11px]">📝</div>
              <div className="text-[9px] font-bold text-gray-900 mt-0.5">Daily Tasks</div>
              <div className="text-[7px] text-gray-400">23 minutes</div>
            </div>
            <div className="bg-white p-1.5 rounded-lg border border-gray-100 shadow-2xs">
              <div className="text-[11px]">🎯</div>
              <div className="text-[9px] font-bold text-gray-900 mt-0.5">Drills</div>
              <div className="text-[7px] text-gray-400">5 weak spots</div>
            </div>
          </div>
        </div>

        {/* Bottom Tab Bar & Home Indicator */}
        <div className="pt-1 border-t border-gray-200">
          <div className="flex justify-around items-center text-[8px] py-0.5 text-gray-400 font-medium">
            <div className="flex flex-col items-center text-red-500 font-bold">
              <span>🏠</span>
              <span>Home</span>
            </div>
            <div className="flex flex-col items-center">
              <span>📚</span>
              <span>Practice</span>
            </div>
            <div className="flex flex-col items-center">
              <span>👥</span>
              <span>Mentors</span>
            </div>
            <div className="flex flex-col items-center">
              <span>📊</span>
              <span>Stats</span>
            </div>
          </div>
          {/* Home indicator bar */}
          <div className="w-16 h-1 bg-gray-900 rounded-full mx-auto mt-1" />
        </div>
      </div>
    </div>
  );
}
