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

const COLORS = ["#22c55e", "#98FB98", "#FF8042"];

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
      // fill="text-muted"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function PieChart1() {
  const { allAnalytics } = useAnalyticsStore();
  const { currCompany } = useCompanyStore();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const allDayData = JSON.parse(
      allAnalytics[currCompany].find(
        (e: any) => e.name_of_analytics === "csat_data"
      )["daily_data_values"]
    );

    let temp;
    for (const day in allDayData) {
      temp = [
        {
          name: "Satisfied",
          value: allDayData[day]["likes"],
        },
        {
          name: "Dissatisfied",
          value: allDayData[day]["dislikes"],
        },
      ];
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
