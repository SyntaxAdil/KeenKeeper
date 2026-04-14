import React from "react";

const HomePage = async () => {
  const friends = await (
    await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/friendData.json")
  ).json();

  return <main>

    Hero Secton
  </main>;
};

export default HomePage;
