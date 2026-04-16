import React from "react";

const Stats = ({ data }) => {
  const STATS = [
    { id: 1, title: data?.length || 0, subtitle: "Total Friends" },
    { id: 2, title: 3, subtitle: "On Track" },
    { id: 3, title: 6, subtitle: "Need Attention" },
    { id: 4, title: 12, subtitle: "Interactions This Month" },
  ];

  return (
    <section className="pb-10 border-b border-[#E9E9E9] mb-10 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {STATS.map((stat, index) => (
          <div
            key={stat.id}
            className={`
              text-center p-8 bg-white shadow border border-white rounded-md
              transition-all duration-300 hover:border-[#244D3F] hover:-translate-y-1 hover:shadow-lg
              animate-fade-up
              ${index === 0 ? "animate-delay-100" : ""}
              ${index === 1 ? "animate-delay-200" : ""}
              ${index === 2 ? "animate-delay-300" : ""}
              ${index === 3 ? "animate-delay-300" : ""}
            `}
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