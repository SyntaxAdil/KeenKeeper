"use client";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Legend,
  Cell,
  Tooltip,
} from "recharts";
import useTimeline from "../../hooks/useTimeline";

export default function StatsChart({ isAnimationActive = true }) {
  const { timeline } = useTimeline();

  const data = [
    {
      name: "Text",
      value: timeline.filter((i) => i.media === "Text").length,
      fill: "#7f37f5",
    },
    {
      name: "Call",
      value: timeline.filter((i) => i.media === "Call").length,
      fill: "#244d3f",
    },
    {
      name: "Video",
      value: timeline.filter((i) => i.media === "Video").length,
      fill: "#37a163",
    },
  ];

  const isEmpty = data.every((i) => i.value === 0);

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center h-75 text-gray-400 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 opacity-30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
        <p className="text-sm font-medium">No statistics yet</p>
        <p className="text-xs opacity-60">
          Start a call, text, or video to see your stats
        </p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          innerRadius="60%"
          outerRadius="80%"
          cornerRadius={8}
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={isAnimationActive}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name) => [`${value} entries`, name]}
          contentStyle={{
            borderRadius: "8px",
            border: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            fontSize: "13px",
          }}
        />
        <Legend
          iconType="circle"
          iconSize={8}
          formatter={(value) => (
            <span style={{ color: "#6b7280", fontSize: "13px" }}>{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
