import React from "react";

/**
 * Compact phone mockup frame for the "How ExamDash Works" feature cards.
 */
function MiniPhone({ children, className = "" }) {
  return (
    <div
      className={`relative w-[140px] sm:w-[155px] h-[280px] sm:h-[310px] bg-white rounded-[28px] border-[4px] border-gray-900 shadow-xl overflow-hidden flex flex-col select-none ${className}`}
    >
      {/* Dynamic Island */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-20" />
      {/* Screen interior */}
      <div className="w-full h-full flex flex-col pt-5 px-2.5 pb-1.5">
        {children}
      </div>
      {/* Home indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gray-900 rounded-full" />
    </div>
  );
}

/* ─── Home Dashboard Screen ──────────────────────────────── */
export function HomeDashboardScreen({ className = "" }) {
  return (
    <MiniPhone className={className}>
      {/* Top header */}
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 to-rose-400 flex items-center justify-center text-white text-[8px] font-bold">
            D
          </div>
          <div>
            <div className="text-[7px] text-gray-400 leading-tight">Hi, Daisy</div>
            <div className="text-[9px] font-bold text-gray-800 leading-tight">Ready to Study?</div>
          </div>
        </div>
        <span className="text-[8px] font-bold text-orange-500 bg-orange-50 px-1 py-0.5 rounded-full">🔥 10</span>
      </div>

      {/* Countdown */}
      <div className="bg-gray-900 text-white text-[7px] font-medium py-0.5 px-2 rounded-full flex justify-between mb-1.5">
        <span className="text-gray-300">Target Exam</span>
        <span className="text-rose-400 font-bold">11 Days</span>
      </div>

      {/* Readiness Card */}
      <div className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] rounded-xl p-2 text-white mb-1.5">
        <div className="flex justify-between text-[7px] opacity-90">
          <span>Readiness Score</span>
          <span className="text-[6px] bg-white/20 px-1 rounded-full">PMP</span>
        </div>
        <div className="flex items-baseline gap-0.5 mt-0.5">
          <span className="text-lg font-black">65</span>
          <span className="text-[9px] opacity-80">/ 100</span>
        </div>
        <div className="w-full bg-white/30 h-1 rounded-full mt-1 overflow-hidden">
          <div className="bg-white h-full rounded-full w-[65%]" />
        </div>
      </div>

      {/* Recommended */}
      <div className="text-[7px] font-bold text-gray-500 mb-1">Recommended</div>
      <div className="bg-gray-50 rounded-lg p-1.5 border border-gray-100 flex items-center gap-1.5 mb-1.5">
        <div className="w-5 h-5 rounded-md bg-red-100 flex items-center justify-center text-[7px]">📝</div>
        <div className="flex-1 min-w-0">
          <div className="text-[8px] font-bold text-gray-800 truncate">Diagnostic Test</div>
          <div className="text-[6px] text-gray-400">50 questions</div>
        </div>
      </div>

      {/* Quick tiles */}
      <div className="grid grid-cols-2 gap-1 mt-auto">
        <div className="bg-gray-50 rounded-md p-1 border border-gray-100">
          <div className="text-[8px]">📝</div>
          <div className="text-[7px] font-bold text-gray-800">Tasks</div>
        </div>
        <div className="bg-gray-50 rounded-md p-1 border border-gray-100">
          <div className="text-[8px]">🎯</div>
          <div className="text-[7px] font-bold text-gray-800">Drills</div>
        </div>
      </div>
    </MiniPhone>
  );
}

/* ─── Exams Screen 1 (topic list) ────────────────────────── */
export function ExamsListScreen({ className = "" }) {
  return (
    <MiniPhone className={className}>
      <div className="text-[9px] font-bold text-gray-800 mb-1.5">Exams</div>
      <div className="flex flex-col gap-1.5">
        {[
          { name: "PMP Certification", q: "2,500+ questions", color: "bg-red-50 border-red-100" },
          { name: "CPA Exam", q: "1,800+ questions", color: "bg-blue-50 border-blue-100" },
          { name: "CIMA Strategic", q: "1,200+ questions", color: "bg-emerald-50 border-emerald-100" },
          { name: "ACCA Papers", q: "3,100+ questions", color: "bg-amber-50 border-amber-100" },
        ].map((e) => (
          <div key={e.name} className={`${e.color} border rounded-xl p-2 flex items-center gap-2`}>
            <div className="w-6 h-6 rounded-lg bg-white shadow-2xs flex items-center justify-center text-[9px] flex-shrink-0">📋</div>
            <div className="flex-1 min-w-0">
              <div className="text-[8px] font-bold text-gray-800 truncate">{e.name}</div>
              <div className="text-[7px] text-gray-400">{e.q}</div>
            </div>
            <div className="text-[8px] text-gray-400">→</div>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-2">
        <div className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] text-white text-[7px] font-bold py-1.5 rounded-full text-center">
          Browse All Exams
        </div>
      </div>
    </MiniPhone>
  );
}

/* ─── Exams Screen 2 (visa/practice modules) ─────────────── */
export function ExamsModulesScreen({ className = "" }) {
  return (
    <MiniPhone className={className}>
      <div className="text-[9px] font-bold text-gray-800 mb-1">PMP Modules</div>
      <div className="flex flex-col gap-1">
        {[
          { name: "Risk Management", pct: 72, color: "bg-red-400" },
          { name: "Project Planning", pct: 85, color: "bg-emerald-400" },
          { name: "Quality Control", pct: 55, color: "bg-amber-400" },
          { name: "Cost Management", pct: 40, color: "bg-rose-400" },
          { name: "Stakeholders", pct: 30, color: "bg-blue-400" },
        ].map((m) => (
          <div key={m.name} className="bg-gray-50 rounded-lg p-1.5 border border-gray-100">
            <div className="flex justify-between text-[7px] mb-0.5">
              <span className="font-semibold text-gray-700 truncate">{m.name}</span>
              <span className="font-bold text-gray-500">{m.pct}%</span>
            </div>
            <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
              <div className={`${m.color} h-full rounded-full`} style={{ width: `${m.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </MiniPhone>
  );
}

/* ─── Drill Screen ───────────────────────────────────────── */
export function DrillScreen({ className = "" }) {
  return (
    <MiniPhone className={className}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[8px] text-gray-400">←</span>
        <span className="text-[9px] font-bold text-gray-800">Drill</span>
        <span className="text-[8px] text-red-400 font-bold">04:32</span>
      </div>

      {/* Question */}
      <div className="bg-gray-50 rounded-xl p-2 border border-gray-100 mb-2">
        <div className="text-[7px] text-red-400 font-bold mb-0.5">Question 3 of 10</div>
        <p className="text-[8px] text-gray-700 leading-relaxed font-medium">
          The continuous practices collect helps find if a responsibility is on...
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-1">
        {["A. Monitoring", "B. Initiating", "C. Planning", "D. Executing"].map((opt, i) => (
          <div
            key={opt}
            className={`text-[8px] py-1.5 px-2 rounded-lg border font-medium ${
              i === 1
                ? "bg-red-50 border-red-300 text-red-700"
                : "bg-white border-gray-100 text-gray-600"
            }`}
          >
            {opt}
          </div>
        ))}
      </div>
      <div className="mt-auto pt-1.5">
        <div className="bg-gray-900 text-white text-[7px] font-bold py-1.5 rounded-full text-center">
          Submit Answer
        </div>
      </div>
    </MiniPhone>
  );
}

/* ─── Games Screen ───────────────────────────────────────── */
export function GamesScreen({ className = "" }) {
  return (
    <MiniPhone className={className}>
      <div className="text-[9px] font-bold text-gray-800 mb-1.5">Games</div>

      {/* Active challenge */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl p-2 mb-2">
        <div className="text-[8px] font-bold text-amber-700 mb-0.5">🏆 Weekly Challenge</div>
        <div className="text-[7px] text-amber-600 leading-relaxed">
          Beat the timer! Answer 10 questions in under 5 minutes.
        </div>
        <div className="flex items-center gap-1 mt-1">
          <div className="flex-1 bg-amber-200 h-1 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full rounded-full w-[60%]" />
          </div>
          <span className="text-[7px] font-bold text-amber-600">6/10</span>
        </div>
      </div>

      {/* Game modes */}
      <div className="flex flex-col gap-1.5">
        {[
          { icon: "⚡", name: "Speed Round", desc: "Beat the clock" },
          { icon: "🧠", name: "Memory Match", desc: "Term flashcards" },
          { icon: "🎲", name: "Random Quiz", desc: "Surprise topics" },
        ].map((g) => (
          <div key={g.name} className="bg-white rounded-lg p-1.5 border border-gray-100 flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-gray-50 flex items-center justify-center text-[9px] flex-shrink-0">{g.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[8px] font-bold text-gray-800">{g.name}</div>
              <div className="text-[6px] text-gray-400">{g.desc}</div>
            </div>
            <div className="text-[7px] text-gray-400">→</div>
          </div>
        ))}
      </div>
    </MiniPhone>
  );
}

/* ─── Progress / Analytics Screen ────────────────────────── */
export function ProgressScreen({ className = "" }) {
  return (
    <MiniPhone className={className}>
      <div className="text-[9px] font-bold text-gray-800 mb-1.5">Progress</div>

      {/* Score trend */}
      <div className="bg-gray-50 rounded-xl p-2 border border-gray-100 mb-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[7px] font-semibold text-gray-500">Readiness Trend</span>
          <span className="text-[7px] font-bold text-emerald-500">↑ 12%</span>
        </div>
        {/* Bar chart */}
        <div className="flex items-end gap-1 h-12">
          {[30, 42, 38, 52, 48, 60, 65].map((v, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-sm ${i === 6 ? "bg-red-400" : "bg-gray-300"}`}
              style={{ height: `${(v / 65) * 100}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[5px] text-gray-400 mt-0.5">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-1">
        <div className="bg-white rounded-lg p-1.5 border border-gray-100 text-center">
          <div className="text-[11px] font-black text-gray-800">42</div>
          <div className="text-[6px] text-gray-400">Sessions</div>
        </div>
        <div className="bg-white rounded-lg p-1.5 border border-gray-100 text-center">
          <div className="text-[11px] font-black text-gray-800">18h</div>
          <div className="text-[6px] text-gray-400">Study Time</div>
        </div>
        <div className="bg-white rounded-lg p-1.5 border border-gray-100 text-center">
          <div className="text-[11px] font-black text-emerald-500">78%</div>
          <div className="text-[6px] text-gray-400">Avg Score</div>
        </div>
        <div className="bg-white rounded-lg p-1.5 border border-gray-100 text-center">
          <div className="text-[11px] font-black text-red-500">3</div>
          <div className="text-[6px] text-gray-400">Weak Areas</div>
        </div>
      </div>
    </MiniPhone>
  );
}
