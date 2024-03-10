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
  { name: "Marsh & McLennan Cos., Inc.", revenue: 19.8 },
  { name: "Aon plc", revenue: 12.2 },
  { name: "WTW", revenue: 9 },
  { name: "Arthur J. Gallagher & Co.", revenue: 6.9 },
  { name: "HUB International", revenue: 3.23 },
  { name: "Brown & Brown, Inc.", revenue: 3.05 },
  { name: "Acrisure, LLC", revenue: 2.97 },
  { name: "Alliant Insurance Services, Inc.", revenue: 2.9 },
  { name: "Truist Insurance Holdings Inc.", revenue: 2.88 },
  { name: "Lockton Inc.", revenue: 2.8 },
  { name: "USI Insurance Services LLC", revenue: 2.3 },
  { name: "AssuredPartners Inc.", revenue: 2.04 },
  { name: "NFP Corp.", revenue: 1.9 },
  { name: "Amwins Group Inc.", revenue: 1.8 },
  { name: "Howden Group Holdings", revenue: 1.57 },
];

const BrokerageRevenueBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        margin={{
          top: 20,
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
        <Bar dataKey="revenue" fill="#00FFFF" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BrokerageRevenueBarChart;
