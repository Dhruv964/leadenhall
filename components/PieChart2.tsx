"use client";
import { useAnalyticsStore, useCompanyStore } from "@/store/newt";
import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#4CAF50",
  "#9C27B0",
  "#FF5722",
  "#795548",
  "#607D8B",
  "#E91E63",
];

// const data = [
//   { name: "Group A", value: 2400 },
//   { name: "Group B", value: 4567 },
// ];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      // fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function PieChart2() {
  const { allAnalytics } = useAnalyticsStore();
  const { currCompany } = useCompanyStore();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const allDayData = JSON.parse(
      allAnalytics[currCompany].find(
        (e: any) => e.name_of_analytics === "button_clicks"
      )["daily_data_values"]
    );
    let temp;
    for (const day in allDayData) {
      temp = [];
      for (const buttonData in allDayData[day]) {
        if (buttonData === "total_button_clicks") continue;
        else
          temp.push({ name: buttonData, value: allDayData[day][buttonData] });
      }
    }
    setData(temp);
  }, [allAnalytics]);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          innerRadius={80}
          outerRadius={150}
          fill="#22c55e"
          dataKey="value"
        >
          {data.map((entry: any, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
