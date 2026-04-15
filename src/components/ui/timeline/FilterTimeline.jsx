"use client";

import { useState } from "react";
import useTimeline from "../../../hooks/useTimeline";

const FilterTimeline = () => {
  const { setFilterType } = useTimeline();
  return (
    <fieldset className="fieldset">
      <label className="text-sm font-semibold  tracking-widest text-gray-400  pb-1">
        Filter Timeline
      </label>
      <select defaultValue="All" className="select outline-0">
        <option onClick={() => setFilterType("All")}>All</option>
        <option onClick={() => setFilterType("Call")}>Call</option>
        <option onClick={() => setFilterType("Text")}>Text</option>
        <option onClick={() => setFilterType("Video")}>Video</option>
      </select>
    </fieldset>
  );
};

export default FilterTimeline;
