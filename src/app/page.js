import React from "react";
import Hero from "./../sections/Hero";
import Stats from "./../sections/Stats";

const HomePage = async () => {
  const friends = await (
    await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/friendData.json")
  ).json();

  return (
    <main className="mx-auto max-w-278">
      <Hero />
      <Stats data={friends} />
    </main>
  );
};

export default HomePage;
