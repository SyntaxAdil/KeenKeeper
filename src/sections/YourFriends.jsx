import React, { use } from "react";
import FriendsCard from "../components/ui/FriendsCard";

const YourFriends = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/friendData.json`,
    { cache: "no-store" },
  );

  const friends = await res.json();
  return (
    <section className="pb-20 px-4">
      <h1 className="text-2xl font-semibold mb-4">Your Friends</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {friends.map((friend) => (
          <FriendsCard key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  );
};

export default YourFriends;
