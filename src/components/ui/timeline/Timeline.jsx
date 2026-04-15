"use client";

import Image from "next/image";
import useTimeline from "../../../hooks/useTimeline";
const TimeLineCard = ({ data }) => {
  return (
    <div className="w-full p-4 rounded-md border border-gray-300 shadow  flex items-center  gap-4 bg-white transition-all duration-200 hover:border-[#64748B]">
      <Image
        src={data.icon}
        width={40}
        height={40}
        alt={data.icon}
        className="w-10 h-10 object-cover"
      ></Image>
      <div>
        <h1 className="text-xl text-[#64748B] mb-1">
          <strong className="text-[#244D3F]">{data.media}</strong> with{" "}
          {data.name}
        </h1>

        <p className="text-[#64748B] font-medium">{data.date}</p>
      </div>
    </div>
  );
};
const Timeline = () => {
  const { timeline } = useTimeline();

  return (
    <div className="w-full my-4 space-y-2">
      {timeline.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 mb-3 opacity-40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
            />
          </svg>
          <p className="text-base font-medium">No timeline yet</p>
          <p className="text-sm mt-1 opacity-70">
            Your activity will appear here
          </p>
        </div>
      ) : (
        timeline.map((data) => <TimeLineCard data={data} key={data.id} />)
      )}
    </div>
  );
};

export default Timeline;
