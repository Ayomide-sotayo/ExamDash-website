import React from "react";
import PhoneMockup from "./PhoneMockup";

/* ── shared brand colours ─────────────────────────── */
export const RED = "bg-red-500";
export const RED_HOVER = "hover:bg-red-600";

/* ── small reusable pill badge ──────────────────────── */
export function Badge({ text }) {
  return (
    <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
      {text}
    </span>
  );
}

/* ── checkmark list item ────────────────────────────── */
export function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
        <svg
          className="w-2.5 h-2.5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
      {children}
    </li>
  );
}

/* ── Section wrapper ────────────────────────────────── */
export function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`w-full py-16 md:py-24 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

/* ── Feature row: text + phone side by side ─────────── */
export function FeatureRow({
  badge,
  title,
  description,
  bullets,
  phoneLeft = false,
  screenBg,
  accentBtn,
  id,
}) {
  const phone = (
    <div className="flex justify-center">
      <PhoneMockup screenBg={screenBg} className="drop-shadow-2xl" />
    </div>
  );
  const text = (
    <div className="flex flex-col justify-center gap-4">
      {badge && <Badge text={badge} />}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      )}
      {bullets && (
        <ul className="flex flex-col gap-2 mt-1">
          {bullets.map((b, i) => (
            <CheckItem key={i}>{b}</CheckItem>
          ))}
        </ul>
      )}
      {accentBtn && (
        <button
          className={`mt-2 self-start ${RED} ${RED_HOVER} text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors`}
        >
          {accentBtn}
        </button>
      )}
    </div>
  );

  return (
    <div id={id} className="grid md:grid-cols-2 gap-12 items-center">
      {phoneLeft ? (
        <>
          {phone}
          {text}
        </>
      ) : (
        <>
          {text}
          {phone}
        </>
      )}
    </div>
  );
}
