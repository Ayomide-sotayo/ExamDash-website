import React from "react";

export default function Placeholder({ title }) {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center min-h-[70vh] pt-24 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-500 max-w-lg">
        This page is a placeholder. Send the Figma design for this section
        whenever you're ready!
      </p>
    </div>
  );
}
