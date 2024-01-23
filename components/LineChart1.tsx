"use client";

import { useAnalyticsStore, useCompanyStore } from "@/store/newt";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function LineChart1() {
  const { allAnalytics } = useAnalyticsStore();
  const { currCompany } = useCompanyStore();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const allDayData = JSON.parse(
      allAnalytics[currCompany].find(
        (e: any) => e.name_of_analytics === "total_questions"
      )["daily_data_values"]
    );
    const temp = [];
    for (const day in allDayData) {
      temp.push({
        name: day.substring(0, 5).replace("-", "/"),
        Conversations: allDayData[day],
      });
    }
    setData(temp);
    // console.log(allAnalytics[currCompany]);
  }, [allAnalytics]);
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Render only one Line component for the desired data key (Conversations in this case) */}
        <Line
          type="monotone"
          dataKey="Conversations"
          stroke="#22c55e"
          strokeWidth={3}
          activeDot={{ r: 9 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
