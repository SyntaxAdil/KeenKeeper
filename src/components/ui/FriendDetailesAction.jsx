"use client";
import { MessageSquare, Phone, Video } from "lucide-react";
import useTimeline from "../../hooks/useTimeline";
const FriendDetailesAction = ({ name }) => {
  const { addToTimeline } = useTimeline();
  const ACTIONS_BTN = [
    { id: 1, icon: Phone, text: "Call", action: "call" },
    { id: 2, icon: MessageSquare, text: "Text", action: "message" },
    { id: 3, icon: Video, text: "Video", action: "video" },
  ];
const hoverClass={
  "call":"group-hover:text-emerald-600 hover:border-emerald-200",
  "message":"group-hover:text-indigo-600 hover:border-indigo-200",
  "video":"group-hover:text-cyan-600 hover:border-cyan-200"
}
  return (
    <div className=" p-4 bg-white shadow border border-white rounded-md  text-left  ">
      <h1 className="text-xl font-medium text-[#244D3F] mb-4">
        Quick Check-In
      </h1>
      <div className="grid grid-cols-3 gap-4 ">
        {ACTIONS_BTN.map((action) => (
          <button
            key={action.id}
            onClick={() => addToTimeline(action.action, name)}
            className={`text-lg text-[#1F2937] font-medium btn h-23 flex-col  group bg-[#f8fafc] ${hoverClass[action.action]} `}
          >
            <action.icon className={`${hoverClass[action.action]} transition-colors duration-150`} />
            {action.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FriendDetailesAction;
