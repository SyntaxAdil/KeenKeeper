"use client";
import { useContext } from "react";
import { TimelineContextApi } from "../context/TimelineContext";

const useTimeline = () => {
  return useContext(TimelineContextApi);
};

export default useTimeline;
