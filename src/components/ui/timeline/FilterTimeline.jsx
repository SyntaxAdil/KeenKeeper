"use client"

import { useState } from "react";
import useTimeline from "../../../hooks/useTimeline";

const FilterTimeline = () => {
    const {setFilterType}=useTimeline()
  return (
    <fieldset className="fieldset">
      <select defaultValue="Filter timeline" className="select outline-0">
        <option disabled={true}>Filter timeline</option>
        <option onClick={()=>setFilterType("All")} >All</option>
        <option onClick={()=>setFilterType("Call")} >Call</option>
        <option onClick={()=>setFilterType("Text")} >Text</option>
        <option onClick={()=>setFilterType("Video")} >Video</option>
      </select>
    </fieldset>
  );
};

export default FilterTimeline;
