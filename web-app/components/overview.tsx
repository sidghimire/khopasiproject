"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = Array.from({ length: 5 }, (_, index) => {
  const daysAgo = index + 1; // Add 1 to start from 1 day ago
  const date = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);

  // Formatting date in the format "YYYY-MM-DD"
  const formattedDate = date.toISOString().split("T")[0];

  const highestRandom = Math.floor(Math.random() * 3) + 3; // Random value between 3 and 9
  const lowestRandom = Math.max(
    Math.floor(Math.random() * (highestRandom - 1)) + 1,
    1
  ); // Random value between 1 and highestRandom - 1

  return {
    avgTime: formattedDate,
    lowestRandom,
    highestRandom,
  };
});

export function Overview({ data }: any) {
  return (
    <>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="avgTime"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value} level`}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="highest"
            style={{ fill: "red" }} // Color for highestRandom
            radius={[4, 4, 0, 0]}
            className="fill-primary"
          />
          <Bar
            dataKey="lowest"
            style={{ fill: "blue" }} // Color for lowestRandom
            radius={[4, 4, 0, 0]}
            className="fill-primary"
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex flex-row space-x-5">
        <div className="flex space-x-3">
          <div className="w-[50px] p-3 rounded bg-[#ff0000]"></div>
          <div className=" text-[14px] text-gray-600 font-light ">
            Highest Level
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="w-[50px] p-3 rounded bg-[#0000ff]"></div>
          <div className=" text-[14px] text-gray-600 font-light ">
            Lowest Level
          </div>
        </div>
      </div>
    </>
  );
}
