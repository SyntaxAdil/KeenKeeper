import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendsCard = ({ friend }) => {
  const statusClass = {
    Overdue: "bg-[#ef4444]",
    "On-Track": "bg-[#244d3f]",
    "Almost Due": "bg-[#efad44]",
  };
  return (
    <Link
      href={`/friend-detailes/${friend.id}`}
      className="p-8 rounded-md shadow flex items-center  flex-col transition-all duration-150 hover:scale-105 hover:border-[#cbfadb] border border-white text-center"
    >
      <Image
        src={friend.picture}
        width={80}
        height={80}
        alt={friend.name}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABA..."
        className="rounded-full w-20 h-20 object-cover mb-4"
      ></Image>

      <h1 className="text-md truncate md:text-xl font-semibold mb-1 ">
        {friend.name}
      </h1>
      <p className="text-[12px] text-[#64748B]">
        {friend.days_since_contact}d ago
      </p>

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

      <div
        className={` px-3 py-1 text-[12px] text-white font-medium rounded-full ${statusClass[friend.status]}`}
      >
        {friend.status}
      </div>
    </Link>
  );
};

export default FriendsCard;
