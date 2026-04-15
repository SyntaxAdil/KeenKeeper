import React, { Suspense } from "react";
import Hero from "./../sections/Hero";
import HeroStats from "../sections/HeroStats";
import YourFriends from "./../sections/YourFriends";
import SkeletonGrid from "../components/ui/loader/FriendSkeleton";

const HomePage = async () => {
  const res = await fetch(
    `${"https://keen-keeper-adil.vercel.app" || "http://localhost:3000"}/friendData.json`,
    { cache: "no-store" },
  );

  const friends = await res.json();
  return (
    <main className="mx-auto max-w-278">
      <Hero />
      <HeroStats data={friends} />
      <Suspense fallback={<SkeletonGrid />}>
        <YourFriends />
      </Suspense>
    </main>
  );
};

export default HomePage;
