import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { industry: "All Risks", GWPSize: 27.6 },
  { industry: "Aviation", GWPSize: 2.1 },
  { industry: "Casualty", GWPSize: 3.6 },
  { industry: "Energy", GWPSize: 3 },
  { industry: "Property", GWPSize: 7.2 },
  { industry: "Healthcare", GWPSize: 0.9 },
  { industry: "Marine", GWPSize: 4.5 },
  { industry: "Specialty", GWPSize: 2.4 },
  { industry: "Casualty Other", GWPSize: 3.6 },
];

export const ScatterChartSize = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="industry" name="Industy" />
        <YAxis dataKey="GWPSize" name="Size in Billion $ " />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};
