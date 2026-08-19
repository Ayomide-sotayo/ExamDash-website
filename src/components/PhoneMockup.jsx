import React from "react";

/**
 * PhoneMockup – a simple phone frame with a placeholder screen interior.
 * Pass `screenBg` to tint the screen area (e.g. "bg-pink-50").
 * Pass `children` to render content inside the screen.
 */
export default function PhoneMockup({
  screenBg = "bg-gray-100",
  children,
  className = "",
}) {
  return (
    <div className={`relative mx-auto w-[200px] ${className}`}>
      {/* Phone outer shell */}
      <div className="relative w-[200px] h-[410px] bg-white rounded-[40px] shadow-2xl border-[6px] border-gray-200 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-white rounded-b-2xl z-10 flex items-center justify-center">
          <div className="w-10 h-2 bg-gray-200 rounded-full" />
        </div>
        {/* Screen */}
        <div className={`w-full h-full ${screenBg} flex flex-col pt-8`}>
          {children ? (
            children
          ) : (
            <div className="flex-1 flex flex-col gap-3 p-3">
              {/* Placeholder UI bars */}
              <div className="flex gap-2 items-center mt-2">
                <div className="w-6 h-6 rounded-full bg-red-400" />
                <div className="h-2 bg-gray-300 rounded flex-1" />
              </div>
              <div className="h-20 bg-red-100 rounded-xl" />
              <div className="h-2 bg-gray-200 rounded w-3/4" />
              <div className="h-2 bg-gray-200 rounded w-1/2" />
              <div className="h-12 bg-red-200 rounded-xl" />
              <div className="h-2 bg-gray-200 rounded w-2/3" />
              <div className="h-2 bg-gray-200 rounded w-3/5" />
              <div className="h-10 bg-gray-200 rounded-xl mt-1" />
            </div>
          )}
        </div>
      </div>
      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full" />
    </div>
  );
}
