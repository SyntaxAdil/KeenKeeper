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
          <strong className="text-[#244D3F]">{data.media}</strong>
          with {data.name}
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
      {timeline.map((data) => (
        <TimeLineCard data={data} key={data.id} />
      ))}
    </div>
  );
};

export default Timeline;
