import React from "react";

/**
 * Clean, modern iPhone frame for How ExamDash Works feature rows
 */
function PhoneFrame({ children, className = "", heightClass = "h-[300px] sm:h-[340px]" }) {
  return (
    <div
      className={`relative mx-auto w-[200px] sm:w-[220px] ${heightClass} bg-white rounded-[36px] border-[5px] border-gray-900 shadow-xl overflow-hidden flex flex-col select-none ${className}`}
    >
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e]" />
      </div>

      {/* Screen content */}
      <div className="w-full h-full flex flex-col pt-5 px-3 pb-2 justify-between bg-[#FAFAFC]">
        {children}
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gray-900 rounded-full" />
    </div>
  );
}

/**
 * 1. Home Feature Phone: Dashboard with action tiles and nav bar
 */
export function HowHomePhone() {
  return (
    <PhoneFrame>
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-800 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-800 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>

        {/* Small greeting */}
        <div className="flex justify-between items-center px-0.5">
          <div>
            <div className="text-[8px] text-gray-400">Readiness Overview</div>
            <div className="text-[10px] font-bold text-gray-900">Dashboard</div>
          </div>
          <span className="text-[8px] font-bold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded-full">
            🔥 10
          </span>
        </div>

        {/* 4 Feature Tiles Grid */}
        <div className="grid grid-cols-2 gap-2 mt-1">
          <div className="bg-white p-2.5 rounded-xl border border-gray-100 shadow-2xs flex flex-col gap-1">
            <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-[11px]">
              📝
            </div>
            <div className="text-[9px] font-bold text-gray-900">Daily tasks</div>
            <div className="text-[7px] text-gray-400">4 pending</div>
          </div>

          <div className="bg-white p-2.5 rounded-xl border border-gray-100 shadow-2xs flex flex-col gap-1">
            <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-[11px]">
              🎯
            </div>
            <div className="text-[9px] font-bold text-gray-900">Drills</div>
            <div className="text-[7px] text-gray-400">3 weak spots</div>
          </div>

          <div className="bg-white p-2.5 rounded-xl border border-gray-100 shadow-2xs flex flex-col gap-1">
            <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-[11px]">
              👥
            </div>
            <div className="text-[9px] font-bold text-gray-900">Mentors</div>
            <div className="text-[7px] text-gray-400">1 scheduled</div>
          </div>

          <div className="bg-white p-2.5 rounded-xl border border-gray-100 shadow-2xs flex flex-col gap-1">
            <div className="w-6 h-6 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center text-[11px]">
              📊
            </div>
            <div className="text-[9px] font-bold text-gray-900">Stats</div>
            <div className="text-[7px] text-gray-400">65/100 score</div>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="border-t border-gray-200 pt-1.5 flex justify-around items-center text-[8px] text-gray-400 font-medium">
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
    </PhoneFrame>
  );
}

/**
 * 2. Packs & Missions Phone: Chapter pathways and mission progress
 */
export function HowPacksPhone() {
  return (
    <PhoneFrame>
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-800 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-800 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>

        {/* Title */}
        <div className="px-0.5">
          <div className="text-[11px] font-bold text-gray-900">Packs & Missions</div>
          <div className="text-[8px] text-gray-400">Structured exam pathways</div>
        </div>

        {/* Highlight Pack Banner */}
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-2.5">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[11px]">📦</span>
            <span className="text-[9px] font-bold text-purple-900">Domain 1: People</span>
          </div>
          <p className="text-[7px] text-purple-700 leading-tight">
            Covers team leadership, conflict resolution, and stakeholder engagement.
          </p>
          <div className="w-full bg-purple-200 h-1 rounded-full mt-1.5 overflow-hidden">
            <div className="bg-purple-600 h-full rounded-full w-[70%]" />
          </div>
        </div>

        {/* Missions List */}
        <div className="flex flex-col gap-1.5">
          <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-2xs flex justify-between items-center">
            <div>
              <div className="text-[8px] font-bold text-gray-800">Mission 1: Team Formation</div>
              <div className="text-[7px] text-gray-400">12 / 15 steps completed</div>
            </div>
            <span className="text-[8px] font-bold text-emerald-500">✓ Done</span>
          </div>

          <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-2xs flex justify-between items-center">
            <div>
              <div className="text-[8px] font-bold text-gray-900">Mission 2: Conflict Mgmt</div>
              <div className="text-[7px] text-gray-400">4 / 10 steps</div>
            </div>
            <span className="text-[8px] font-bold text-rose-500">In progress</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white text-[8px] font-bold py-1.5 rounded-full text-center mb-1">
        Resume Mission
      </div>
    </PhoneFrame>
  );
}

/**
 * 3. Drill Feature Phone: Targeted adaptive practice
 */
export function HowDrillPhone() {
  return (
    <PhoneFrame>
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-800 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-800 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>

        {/* Title */}
        <div className="px-0.5 flex justify-between items-center">
          <div className="text-[11px] font-bold text-gray-900">Drills</div>
          <span className="text-[8px] text-red-500 font-semibold">Adaptive</span>
        </div>

        {/* Tab Pills */}
        <div className="flex gap-1 bg-gray-100 p-0.5 rounded-lg text-[7px] font-medium text-gray-600">
          <div className="flex-1 bg-white text-gray-900 font-bold py-0.5 text-center rounded shadow-2xs">
            All
          </div>
          <div className="flex-1 py-0.5 text-center">Weak areas</div>
          <div className="flex-1 py-0.5 text-center">Timed</div>
        </div>

        {/* Alert Banner */}
        <div className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] text-white rounded-xl p-2.5 shadow-sm">
          <div className="text-[9px] font-bold">Weak Area Focus</div>
          <p className="text-[7px] text-white/90 leading-tight mt-0.5">
            Targeting Risk & Variance calculations based on recent diagnostic score.
          </p>
        </div>

        {/* Drills List */}
        <div className="flex flex-col gap-1.5">
          <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-2xs flex justify-between items-center">
            <div>
              <div className="text-[8px] font-bold text-gray-900">Risk Mitigation Drill</div>
              <div className="text-[7px] text-gray-400">10 questions • 8 mins</div>
            </div>
            <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-[7px] font-bold">
              ▶
            </div>
          </div>

          <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-2xs flex justify-between items-center">
            <div>
              <div className="text-[8px] font-bold text-gray-900">Earned Value Calculations</div>
              <div className="text-[7px] text-gray-400">15 questions • 12 mins</div>
            </div>
            <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-[7px] font-bold">
              ▶
            </div>
          </div>
        </div>
      </div>

      <div className="text-[7px] text-center text-gray-400 mb-1">
        Drill results update your readiness score live
      </div>
    </PhoneFrame>
  );
}

/**
 * 4. Games Feature Phone: Quick interactive recall modes
 */
export function HowGamesPhone() {
  return (
    <PhoneFrame>
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-800 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-800 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>

        {/* Title */}
        <div className="px-0.5">
          <div className="text-[11px] font-bold text-gray-900">Games</div>
          <div className="text-[8px] text-gray-400">Active recall under time pressure</div>
        </div>

        {/* Two Game Action Cards */}
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-2.5 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center text-sm shadow-2xs flex-shrink-0">
            ⚡
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] font-bold text-gray-900">Speed Challenge</div>
            <div className="text-[7px] text-gray-500 leading-tight">60-second rapid fire questions</div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-xl p-2.5 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm shadow-2xs flex-shrink-0">
            🃏
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] font-bold text-gray-900">Concept Match</div>
            <div className="text-[7px] text-gray-500 leading-tight">Match formulas & definitions</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-2xs flex justify-between items-center">
          <span className="text-[8px] font-bold text-gray-800">🏆 Today's Leaderboard</span>
          <span className="text-[8px] font-bold text-orange-500">Top 5%</span>
        </div>
      </div>

      <div className="bg-gray-900 text-white text-[8px] font-bold py-1.5 rounded-full text-center mb-1">
        Play Speed Challenge
      </div>
    </PhoneFrame>
  );
}

/**
 * 5. Progress Feature Phone: Weekly readiness bar chart
 */
export function HowProgressPhone() {
  return (
    <PhoneFrame>
      <div className="flex flex-col gap-2 pt-1">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[8px] font-semibold text-gray-800 px-0.5">
          <span>9:41</span>
          <div className="w-3 h-1.5 border border-gray-800 rounded-2xs p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-800" />
          </div>
        </div>

        {/* Title */}
        <div className="px-0.5 flex justify-between items-center">
          <div className="text-[11px] font-bold text-gray-900">Progress</div>
          <span className="text-[8px] text-emerald-600 font-bold">↑ 14% growth</span>
        </div>

        {/* Week Selector */}
        <div className="bg-white rounded-lg p-1.5 border border-gray-100 text-center text-[8px] font-bold text-gray-700 flex justify-between items-center">
          <span className="text-gray-400">‹</span>
          <span>Week 1 – Week 7</span>
          <span className="text-gray-400">›</span>
        </div>

        {/* Vertical Bar Chart */}
        <div className="bg-white rounded-xl p-2.5 border border-gray-100 shadow-2xs">
          <div className="flex items-end justify-between gap-1.5 h-20 pt-2">
            {[
              { week: "W1", val: 35, active: false },
              { week: "W2", val: 42, active: false },
              { week: "W3", val: 48, active: false },
              { week: "W4", val: 52, active: false },
              { week: "W5", val: 58, active: false },
              { week: "W6", val: 62, active: false },
              { week: "W7", val: 65, active: true },
            ].map((col) => (
              <div key={col.week} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                <div
                  className={`w-full rounded-t-sm transition-all ${
                    col.active
                      ? "bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)]"
                      : "bg-red-200"
                  }`}
                  style={{ height: `${(col.val / 70) * 100}%` }}
                />
                <span className="text-[6px] text-gray-400 font-semibold">{col.week}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats footer */}
        <div className="grid grid-cols-2 gap-1 text-center">
          <div className="bg-gray-50 rounded-lg p-1">
            <div className="text-[10px] font-black text-gray-900">65/100</div>
            <div className="text-[6px] text-gray-400">Current score</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-1">
            <div className="text-[10px] font-black text-emerald-600">82/100</div>
            <div className="text-[6px] text-gray-400">Target score</div>
          </div>
        </div>
      </div>

      <div className="text-[7px] text-center text-gray-400 mb-1">
        Trajectory is updated after every drill
      </div>
    </PhoneFrame>
  );
}
