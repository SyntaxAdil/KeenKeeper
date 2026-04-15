// app/not-found.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

function LostCompassSVG() {
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="95" fill="#FEF3C7" />
      <path
        d="M100 20 L100 180 M20 100 L180 100"
        stroke="#FCD34D"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
      <circle
        cx="100"
        cy="100"
        r="70"
        stroke="#FCD34D"
        strokeWidth="1.5"
        strokeDasharray="6 6"
      />
      <path
        d="M85 55 C85 40, 115 40, 115 55 C115 68, 100 72, 100 85 L100 95"
        stroke="#D97706"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="100" cy="115" r="5" fill="#D97706" />
      <circle cx="50" cy="60" r="5" fill="#60A5FA" />
      <circle cx="150" cy="45" r="4" fill="#F87171" />
      <circle cx="45" cy="140" r="4.5" fill="#34D399" />
      <circle cx="155" cy="130" r="4" fill="#A78BFA" />
      <circle
        cx="148"
        cy="158"
        r="10"
        stroke="#9CA3AF"
        strokeWidth="2.5"
        fill="none"
      />
      <line
        x1="155"
        y1="165"
        x2="168"
        y2="178"
        stroke="#9CA3AF"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <LostCompassSVG />
        </div>

        <h1 className="text-7xl font-bold text-[#244d3f]   ">404</h1>

        <h2 className="mt-2 text-xl font-semibold text-gray-800 ">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500  text-sm max-w-sm">
          The page you're looking for doesn't exist or was moved.
        </p>

        <div className="mt-6 flex gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2 rounded-lg bg-[#244d3f]  hover:brightness-90 text-white text-sm font-medium transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
