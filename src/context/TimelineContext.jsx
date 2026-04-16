"use client"
import { createContext, useRef, useState } from "react";
import toast from "react-hot-toast";

export const TimelineContextApi = createContext(null);

const TimelineContext = ({ children }) => {
  const [allTimeline, setAllTimeline] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [sortType, setSortType] = useState("");
  const [query, setQuery] = useState("");
  const addingRef = useRef(false);

  const messages = {
    call: "Call logged successfully",
    message: "Message sent successfully",
    video: "Video session added",
  };

  const addToTimeline = (media, name) => {
    if (addingRef.current) return;

    addingRef.current = true;

    setAllTimeline((prev) => {
      const newEntry = {
        id: crypto.randomUUID(),
        name,
        icon:
          media === "call"
            ? "/assets/call.png"
            : media === "message"
              ? "/assets/text.png"
              : "/assets/video.png",
        media:
          media === "call" ? "Call" : media === "message" ? "Text" : "Video",
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };
      return [...prev, newEntry];
    });

    toast.success(
      `${messages[media]} ${media === "message" ? "to" : "with"} ${name}`
    );

    setTimeout(() => {
      addingRef.current = false;
    }, 500);
  };

  const filteredTimeline = filterType
    ? allTimeline.filter((i) =>
        filterType === "All" ? true : i.media === filterType
      )
    : allTimeline;

  const sortedTimeline = sortType
    ? [...filteredTimeline].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortType === "newest" ? dateB - dateA : dateA - dateB;
      })
    : filteredTimeline;

  const queryTimeline = sortedTimeline.filter((i) =>
    i.name.toLowerCase().includes(query.toLowerCase())
  );

  const value = {
    addToTimeline,
    timeline: queryTimeline,
    setFilterType,
    setSortType,
    setQuery,
    setAllTimeline,
  };

  return (
    <TimelineContextApi.Provider value={value}>
      {children}
    </TimelineContextApi.Provider>
  );
};

export default TimelineContext;