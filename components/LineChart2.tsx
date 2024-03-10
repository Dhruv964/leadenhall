import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { industry: "All Risks", share: 82 },
  { industry: "Aviation", share: 94 },
  { industry: "Casualty", share: 90 },
  { industry: "Energy", share: 98 },
  { industry: "Property", share: 86 },
  { industry: "Healthcare", share: 82 },
  { industry: "Marine", share: 83 },
  { industry: "Specialty", share: 80 },
  { industry: "Casualty", share: 71 },
];

export const BarChartShare = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="industry" />
        <YAxis yAxisId="left" domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="share" fill="#8884d8" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
};
