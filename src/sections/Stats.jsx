import React from "react";

const Stats = ({data}) => {

  const STATS = [
    { id: 1, title: data.length, subtitle: "Total Friends" },
    { id: 2, title: 3, subtitle: "On Track" },
    { id: 3, title: 6, subtitle: "Need Attention" },
    { id: 4, title: 12, subtitle: "Interactions This Month" },
  ];

  return (
    <section className="pb-10 border-b border-[#E9E9E9] mb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <div
            key={stat.id}
            className="text-center p-8 bg-white shadow border border-white rounded-md transition-colors hover:border-[#244D3F]"
          >
            <strong className="text-[32px] font-semibold text-[#244D3F]">
              {stat.title}
            </strong>
            <p className="text-lg text-[#64748B]">{stat.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
