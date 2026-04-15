"use client";

import useTimeline from "../../../hooks/useTimeline";

const SerachTimeline = () => {
  const { setQuery } = useTimeline();
  return (
    <div>
      <label className="text-sm font-semibold  tracking-widest text-gray-400  pb-1">
        Search Timeline
      </label>
      <input
        className="input  outline-0 w-full mt-2"
        type="text"
        placeholder="e.g. Abdur Rahman Adil"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SerachTimeline;
