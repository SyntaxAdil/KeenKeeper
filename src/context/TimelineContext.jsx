"use client";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const TimelineContextApi = createContext(null);

const TimelineContext = ({ children }) => {
  const [allTimeline, setAllTimeline] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [sortType, setSortType] = useState("");
  const [query, setQuery] = useState("");
  const messages = {
    call: "Call logged successfully",
    message: "Message sent successfully",
    video: "Video session added",
  };
  const addToTimeline = (media, name) => {
    const newEntry = {
      id: crypto.randomUUID(),
      name: name,
      icon:
        media === "call"
          ? "/assets/call.png"
          : media === "message"
            ? "/assets/text.png"
            : "/assets/video.png",
      media: media === "call" ? "Call" : media === "message" ? "Text" : "Video",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
    setAllTimeline((p) => [...p, newEntry]);
    toast.success(`${messages[media]} ${media==="message"?"to":"with"} ${name}`);
  };

  // filteredLogic
  const filteredTimeline = filterType
    ? allTimeline.filter((i) =>
        filterType === "All" ? true : i.media === filterType,
      )
    : allTimeline;
  const sortedTimeline = sortType
    ? [...filteredTimeline].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortType === "newest" ? dateB - dateA : dateA - dateB;
      })
    : filteredTimeline;

  const qureryTimeline = sortedTimeline.filter((i) =>
    i.name.toLowerCase().includes(query.toLowerCase()),
  );

  const value = {
    addToTimeline,
    timeline: qureryTimeline,
    setFilterType,
    setSortType,
    setQuery,
    setAllTimeline
  };
  return (
    <TimelineContextApi.Provider value={value}>
      {children}
    </TimelineContextApi.Provider>
  );
};

export default TimelineContext;
