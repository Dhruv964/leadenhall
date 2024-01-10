"use client";

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

const data = [
  {
    name: "Page A",
    Conversations: 2400,
  },
  {
    name: "Page B",
    Conversations: 1398,
  },
  {
    name: "Page C",
    Conversations: 9800,
  },
  {
    name: "Page D",
    Conversations: 3908,
  },
  {
    name: "Page E",
    Conversations: 4800,
  },
  {
    name: "Page F",
    Conversations: 3800,
  },
  {
    name: "Page G",
    Conversations: 4300,
  },
];

export function ConversationChart() {
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Render only one Line component for the desired data key (Conversations in this case) */}
        <Line
          type="monotone"
          dataKey="Conversations"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
