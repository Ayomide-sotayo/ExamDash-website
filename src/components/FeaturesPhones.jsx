import React from "react";
import floatingLogo from "../assets/floatinglogo.png";

/**
 * Left Phone: Dark-slate UI showing Active Recall / BETA exercise with keyboard
 */
export function LeftFeaturePhone({ className = "" }) {
  return (
    <div
      className={`relative w-[210px] sm:w-[240px] md:w-[260px] h-[380px] sm:h-[430px] md:h-[460px] bg-[#0E1015] rounded-[38px] border-[5px] sm:border-[6px] border-[#1C1F28] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col text-white select-none ${className}`}
    >
      {/* Top Speaker / Camera Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e]" />
      </div>

      {/* Screen interior */}
      <div className="w-full h-full flex flex-col pt-6 px-3.5 pb-2 justify-between bg-[#1D212C]">
        <div>
          {/* Header prompt box */}
          <div className="bg-[#282E3D] rounded-xl p-2.5 mt-1 border border-white/5 shadow-inner">
            <div className="text-[7px] sm:text-[8px] text-gray-400 font-medium leading-tight">
              Which term describes a probability distribution used in three-point estimating?
            </div>

            {/* BETA letter slots */}
            <div className="flex justify-center gap-1.5 mt-2.5 mb-1">
              {["B", "E", "T", "A"].map((l, i) => (
                <div
                  key={i}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1D212C] border border-[#3E475C] flex items-center justify-center font-black text-xs sm:text-sm text-white shadow-inner"
                >
                  {l}
                </div>
              ))}
            </div>
          </div>

          {/* Virtual Keyboard Grid */}
          <div className="mt-3 grid grid-cols-5 gap-1 text-center">
            {["A", "B", "C", "D", "E", "I", "N", "O", "R", "T"].map((k) => (
              <div
                key={k}
                className="bg-[#2A3040] hover:bg-[#343C50] border border-white/5 rounded-md py-1 text-[9px] sm:text-[10px] font-bold text-gray-200 shadow-2xs"
              >
                {k}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="mt-2.5">
            <button className="w-full bg-[#353D52] border border-white/10 text-white text-[8px] sm:text-[9px] font-bold py-1.5 rounded-xl shadow-xs">
              Submit
            </button>
          </div>
        </div>

        {/* Bottom landscape graphic banner & Home indicator */}
        <div>
          <div className="w-full h-10 sm:h-12 bg-gradient-to-t from-[#253246] to-transparent rounded-lg flex items-end justify-center pb-1">
            <div className="flex gap-1 items-end opacity-40">
              <div className="w-6 h-4 bg-teal-600 rounded-t-full" />
              <div className="w-10 h-7 bg-cyan-700 rounded-t-full" />
              <div className="w-8 h-5 bg-teal-500 rounded-t-full" />
            </div>
          </div>
          <div className="w-14 h-0.5 bg-gray-600 rounded-full mx-auto mt-1" />
        </div>
      </div>
    </div>
  );
}

/**
 * Right Phone: Dark-slate UI showing RecallDash readiness arc gauge & metrics
 */
export function RightFeaturePhone({ className = "" }) {
  return (
    <div
      className={`relative w-[210px] sm:w-[240px] md:w-[260px] h-[380px] sm:h-[430px] md:h-[460px] bg-[#0E1015] rounded-[38px] border-[5px] sm:border-[6px] border-[#1C1F28] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col text-white select-none ${className}`}
    >
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e]" />
      </div>

      {/* Screen interior */}
      <div className="w-full h-full flex flex-col pt-6 px-3.5 pb-2 justify-between bg-[#191C25]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between px-0.5 mt-1">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center p-0.5">
                <img src={floatingLogo} alt="ExamDash" className="w-full h-full object-contain" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wide">
                Recall Dash
              </span>
            </div>
            <span className="text-[7px] sm:text-[8px] text-gray-400 font-medium">PMP</span>
          </div>

          {/* Sparkline chart box */}
          <div className="bg-[#242835] rounded-xl p-2 mt-2 border border-white/5">
            <div className="flex justify-between items-center text-[7px] text-gray-400">
              <span>Readiness Trend</span>
              <span className="text-emerald-400 font-bold">↑ Active</span>
            </div>
            {/* Curved SVG sparkline */}
            <svg className="w-full h-6 mt-1" viewBox="0 0 100 25">
              <path
                d="M0,18 Q20,15 35,12 T70,8 T100,3"
                fill="none"
                stroke="#FF5C3D"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Semi-circular readiness gauge arc card */}
          <div className="bg-[#242835] rounded-xl p-2.5 mt-2 border border-white/5 flex flex-col items-center">
            <div className="relative w-32 h-16 flex items-end justify-center">
              {/* Semi-circle Gauge SVG */}
              <svg className="w-32 h-16" viewBox="0 0 100 50">
                <path
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  fill="none"
                  stroke="#353B4E"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <path
                  d="M 10 50 A 40 40 0 0 1 78 20"
                  fill="none"
                  stroke="url(#featArcGradient)"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="featArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="60%" stopColor="#FF5C3D" />
                    <stop offset="100%" stopColor="#FF2C67" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Scores underneath arc */}
            <div className="flex justify-between w-full text-[9px] sm:text-[10px] font-bold text-gray-300 px-2 -mt-1">
              <span className="text-sky-400 font-black text-sm">10</span>
              <span className="text-rose-400 font-black text-sm">11</span>
            </div>

            <div className="text-[7px] sm:text-[8px] text-gray-400 text-center mt-1">
              <span className="text-white font-bold">80%</span> of answers correct
            </div>
          </div>
        </div>

        {/* Bottom Tab Bar & Home indicator */}
        <div>
          <div className="flex justify-around items-center text-[7px] text-gray-400 pt-1.5 border-t border-white/5">
            <span className="text-rose-500 font-bold">● Home</span>
            <span>● Practice</span>
            <span>● Stats</span>
          </div>
          <div className="w-14 h-0.5 bg-gray-600 rounded-full mx-auto mt-1.5" />
        </div>
      </div>
    </div>
  );
}
