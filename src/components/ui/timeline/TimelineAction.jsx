"use client";

import { EllipsisVertical, Trash } from "lucide-react";
import useTimeline from "../../../hooks/useTimeline";

const TimelineAction = () => {
  const { timeline, setAllTimeline } = useTimeline();
  return (
    <div className="flex items-center gap-4">
      <h1 className="font-medium text-[#244d3f] text-lg">
        Total: {timeline.length}
      </h1>
      <button onClick={() => setAllTimeline([])} className=" btn btn-error h-8 w-10 p-2 btn-outline hover:text-white tooltip tooltip-bottom tooltip-error" data-tip="Clear all">
        <Trash  /> 
      </button>
    </div>
  );
};

export default TimelineAction;
