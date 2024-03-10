import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { year: 1995, revenue: 3.94, growthPercent: 14.62 },
  { year: 1996, revenue: 4.4, growthPercent: 11.85 },
  { year: 1997, revenue: 6.01, growthPercent: 36.44 },
  { year: 1998, revenue: 7.19, growthPercent: 19.65 },
  { year: 1999, revenue: 9.16, growthPercent: 27.36 },
  { year: 2000, revenue: 10.31, growthPercent: 12.57 },
  { year: 2001, revenue: 9.87, growthPercent: -4.26 },
  { year: 2002, revenue: 10.39, growthPercent: 5.26 },
  { year: 2003, revenue: 11.2, growthPercent: 7.82 },
  { year: 2004, revenue: 11.73, growthPercent: 4.71 },
  { year: 2005, revenue: 10.08, growthPercent: -14.03 },
  { year: 2006, revenue: 10.34, growthPercent: 2.56 },
  { year: 2007, revenue: 11.14, growthPercent: 7.69 },
  { year: 2008, revenue: 10.73, growthPercent: -3.64 },
  { year: 2009, revenue: 9.83, growthPercent: -8.38 },
  { year: 2010, revenue: 10.55, growthPercent: 7.31 },
  { year: 2011, revenue: 11.53, growthPercent: 9.25 },
  { year: 2012, revenue: 11.92, growthPercent: 3.45 },
  { year: 2013, revenue: 12.26, growthPercent: 2.83 },
  { year: 2014, revenue: 12.95, growthPercent: 5.63 },
  { year: 2015, revenue: 12.89, growthPercent: -0.45 },
  { year: 2016, revenue: 13.21, growthPercent: 2.47 },
  { year: 2017, revenue: 14.02, growthPercent: 6.15 },
  { year: 2018, revenue: 14.95, growthPercent: 6.6 },
  { year: 2019, revenue: 16.65, growthPercent: 11.38 },
  { year: 2020, revenue: 17.22, growthPercent: 3.44 },
  { year: 2021, revenue: 19.82, growthPercent: 15.07 },
  { year: 2022, revenue: 20.72, growthPercent: 4.54 },
  { year: 2023, revenue: 22.74, growthPercent: 9.73 },
];

export const DualLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#22c55e"
          strokeWidth={3}
          activeDot={{ r: 9 }}
        />
        <Line
          type="monotone"
          dataKey="growthPercent"
          stroke="#ff7300"
          strokeWidth={3}
          activeDot={{ r: 9 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
