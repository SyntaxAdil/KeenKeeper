import FriendDetailesAction from "./../../../components/ui/FriendDetailesAction";
import React from "react";
import FriendCard from "../../../components/ui/friendDetailes/FriendCard";
import { Archive, Trash, Bell } from "lucide-react";
import { readFileSync } from "fs";
import { join } from "path";

// Dynamic meta data
export async function generateMetadata({ params }) {
  const filePath = join(process.cwd(), "public/friendData.json");
  const friends = JSON.parse(readFileSync(filePath, "utf-8"));
  const { id } = await params;
  const oneFriend = friends.find((i) => i.id == parseInt(id));

  if (!oneFriend) {
    return {
      title: "Friend Not Found | KeenKeeper",
      description: "No friend found in your list.",
    };
  }

  return {
    title: `${oneFriend.name} | KeenKeeper`,
    description: `Last contacted ${oneFriend.days_since_contact} days ago. Next goal: ${oneFriend.goal} days.`,
  };
}
const FriendDetailes = async ({ params }) => {
  const filePath = join(process.cwd(), "public/friendData.json");
  const friends = JSON.parse(readFileSync(filePath, "utf-8"));
  const { id } = await params;

  const oneFriend = friends.find((i) => i.id == parseInt(id));

  const STATS = [
    {
      id: 1,
      title: oneFriend.days_since_contact,
      subtitle: "Days Since Contact",
    },
    { id: 2, title: oneFriend.goal, subtitle: "Goal (Days)" },
    {
      id: 3,
      title: new Date(oneFriend.next_due_date).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      subtitle: "Next Due",
    },
  ];

  return (
    <section className="py-10 bg-[#F8FAFC] w-full min-h-screen px-4">
      <div className="container max-w-278 mx-auto flex justify-between  gap-6 flex-col md:flex-row ">
        {/* left */}
        <div className="w-88">
          <FriendCard friend={oneFriend} />
          <div className="flex flex-col gap-4 my-4">
            <button className="  bg-white py-3 border rounded-md border-gray-200 text-[#1F2937] cursor-pointer font-medium  flex items-center gap-2 justify-center  transition-all duration-150 hover:border-[#1F2937]">
              <Bell size={18} />
              Snooze 2 weeks
            </button>
            <button className="  bg-white py-3 border rounded-md border-gray-200 text-[#1F2937] cursor-pointer font-medium  flex items-center gap-2 justify-center  transition-all duration-150 hover:border-[#1F2937]">
              <Archive size={18} />
              Archive
            </button>
            <button className="  bg-white py-3 border rounded-md border-gray-200 text-error cursor-pointer font-medium  flex items-center gap-2 justify-center transition-all duration-150  hover:border-error">
              <Trash size={18} />
              Delete
            </button>
          </div>
        </div>
        <div className="w-full h-full flex-1 space-y-4">
          {/* stats */}
          <div className="grid  md:grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.id}
                className="text-center p-4 bg-white shadow border border-white rounded-md transition-colors hover:border-[#244D3F] "
              >
                <strong className="text-[30px] font-semibold text-[#244D3F]">
                  {stat.title}
                </strong>
                <p className="text-lg text-[#64748B] font-medium">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Goal */}
          <div className=" p-4 bg-white shadow border border-white rounded-md flex justify-between text-left  ">
            <div>
              <h1 className="text-xl font-medium text-[#244D3F] mb-4">
                Relationship Goal
              </h1>
              <p className="text-lg  text-[#64748B]">
                Connect every <strong>30 days</strong>
              </p>
            </div>
            <button className="btn">Edit</button>
          </div>
          {/* Actions */}
          <FriendDetailesAction name={oneFriend.name} />
        </div>
      </div>
    </section>
  );
};

export default FriendDetailes;
