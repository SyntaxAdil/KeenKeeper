import Image from "next/image";
import React from "react";

const FriendCard = ({ friend }) => {
  const statusClass = {
    Overdue: "bg-[#ef4444]",
    "On-Track": "bg-[#244d3f]",
    "Almost Due": "bg-[#efad44]",
  };
  return (
    <div className="p-6 rounded-md shadow flex items-center  flex-col transition-all duration-150  hover:border-[#cbfadb] border border-white text-center w-full bg-white ">
      <Image
        src={friend.picture}
        width={80}
        height={80}
        alt={friend.name}
        className="rounded-full w-20 h-20 object-cover mb-4"
      ></Image>

      <h1 className="text-md truncate md:text-xl font-semibold mb-2 ">
        {friend.name}
      </h1>
     
      <div
        className={` px-3 py-1 text-[12px] text-white font-medium rounded-full ${statusClass[friend.status]}`}
      >
        {friend.status}
      </div>
      <div className="flex gap-2">
        {friend.tags.map((tag) => (
          <div
            key={tag}
            className="bg-[#cbfadb]  px-3 my-2 py-1 text-[12px] font-semibold rounded-full"
          >
            {tag}
          </div>
        ))}
      </div>

      <q className="text-base my-2  italic text-[#64748B]  font-medium " >{friend.bio} </q>
      <a className="text-[#64748B]  hover:underline hover:text-primary " href="">{friend.email}</a>
    </div>
  );
};

export default FriendCard;
