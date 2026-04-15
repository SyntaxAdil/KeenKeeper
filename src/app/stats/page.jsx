import React from "react";
import StatsChart from "../../components/charts/StatsChart";

const StatsPage = () => {
  return (
    <section className="my-10 max-w-278 mx-auto px-4 ">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 ">Friendship Analytics </h1>

      <div className="rounded-2xl shadow p-8" >
        <h6 className="font-medium text-xl text-[#244D3F]">By Interaction Type</h6>

        <StatsChart></StatsChart>


      </div>
    </section>
  );
};

export default StatsPage;
