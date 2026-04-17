"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 -mt-16">
      <div className="flex flex-col items-center text-center gap-4 max-w-md">
        <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
            Error
          </p>
          <h1 className="text-xl font-medium text-gray-800 mb-2">
            Something went wrong
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            An unexpected error occurred. You can try refreshing the page or go
            back to continue.
          </p>
        </div>

        <div className="flex gap-3 mt-2 flex-wrap justify-center">
          <button
            onClick={reset}
            className="text-sm px-5 py-2 rounded-md border border-gray-200 bg-[#244d3f] text-white hover:bg-[#325247] transition-colors cursor-pointer"
          >
            Try again
          </button>
          <Link
            href="/"
            className="text-sm px-5 py-2 rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-[#244d3f] hover:text-white transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
