"use client";
import { createContext, useState } from "react";


export const TimelineContextApi = createContext(null);

const TimelineContext = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addToTimeline = (media, name) => {
    const newEntry = {
      id:crypto.randomUUID(),
      name: name,
      icon: `${media === "call" ? "/assets/call.png" : media === "message" ? "/assets/text.png" : "/assets/video.png"} `.trim(),
      media: `${media === "call" ? "Call" : media === "message" ? "Text" : "Video"} `,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    setTimeline((p) => [...p, newEntry]);
  };
  
  const value = { addToTimeline, timeline };
  return (
    <TimelineContextApi.Provider value={value}>
      {children}
    </TimelineContextApi.Provider>
  );
};

export default TimelineContext;
