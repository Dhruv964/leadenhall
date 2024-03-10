import React from "react";
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

const dataOpen2021 = [
  { company: "Miller", gwp: 528491.5777, plannedGwp: 792737.3665 },
  { company: "Howden", gwp: 181322.5075, plannedGwp: 271983.7612 },
  { company: "Aon", gwp: 84163.92827, plannedGwp: 126245.8924 },
  { company: "Besso", gwp: 81961.47385, plannedGwp: 122942.2108 },
  { company: "Croton Stokes", gwp: 988720.6725, plannedGwp: 1483081.009 },
  { company: "Balance", gwp: 492444.4544, plannedGwp: 738666.6816 },
  { company: "BMS", gwp: 322499.6381, plannedGwp: 483749.4572 },
  { company: "Gallagher", gwp: 540784.5368, plannedGwp: 811176.8053 },
  { company: "Hendersons", gwp: 405770.5523, plannedGwp: 608655.8284 },
  { company: "Kentro", gwp: 96860.17905, plannedGwp: 145290.2686 },
  { company: "Convex", gwp: 99861.56797, plannedGwp: 149792.352 },
  { company: "Tysers", gwp: 240378.8173, plannedGwp: 360568.226 },
  { company: "McGill", gwp: 673146.5883, plannedGwp: 1009719.882 },
  { company: "Marsh", gwp: 838710.3449, plannedGwp: 1258065.517 },
];

const dataOpen2022 = [
  { company: "Miller", gwp: 255148.3673, plannedGwp: 382722.5509 },
  { company: "Howden", gwp: 985050.2897, plannedGwp: 1477575.435 },
  { company: "Aon", gwp: 794263.14, plannedGwp: 1191394.71 },
  { company: "Besso", gwp: 704360.7992, plannedGwp: 1056541.199 },
  { company: "Croton Stokes", gwp: 279452.7275, plannedGwp: 419179.0912 },
  { company: "Balance", gwp: 15948.38589, plannedGwp: 23922.57883 },
  { company: "BMS", gwp: 8139.847271, plannedGwp: 12209.77091 },
  { company: "Gallagher", gwp: 115333.5274, plannedGwp: 173000.2911 },
  { company: "Hendersons", gwp: 501300.819, plannedGwp: 751951.2285 },
  { company: "Kentro", gwp: 997785.3564, plannedGwp: 1496678.035 },
  { company: "Convex", gwp: 831935.5456, plannedGwp: 1247903.318 },
  { company: "Tysers", gwp: 912122.6381, plannedGwp: 1368183.957 },
  { company: "McGill", gwp: 575548.7145, plannedGwp: 863323.0717 },
  { company: "Marsh", gwp: 191502.1827, plannedGwp: 287253.274 },
];

const combinedDataOpenMarketWithPercentage = [
  {
    company: "Miller",
    gwp2021: 528491.5777,
    gwp2022: 255148.3673,
    percentageDifference2021: -33.36787261708746,
    percentageDifference2022: -33.3645667910381,
  },
  {
    company: "Howden",
    gwp2021: 181322.5075,
    gwp2022: 985050.2897,
    percentageDifference2021: -33.361334067990155,
    percentageDifference2022: -33.333086329102556,
  },
  {
    company: "Aon",
    gwp2021: 84163.92827,
    gwp2022: 794263.14,
    percentageDifference2021: -33.33375876144931,
    percentageDifference2022: -33.33156510654916,
  },
  {
    company: "Besso",
    gwp2021: 81961.47385,
    gwp2022: 704360.7992,
    percentageDifference2021: -33.33628509880335,
    percentageDifference2022: -33.33768821053546,
  },
  {
    company: "Croton Stokes",
    gwp2021: 988720.6725,
    gwp2022: 279452.7275,
    percentageDifference2021: -33.336358703644924,
    percentageDifference2022: -33.33689689714482,
  },
  {
    company: "Balance",
    gwp2021: 492444.4544,
    gwp2022: 15948.38589,
    percentageDifference2021: -33.323409697399654,
    percentageDifference2022: -33.338073294621244,
  },
  {
    company: "BMS",
    gwp2021: 322499.6381,
    gwp2022: 8139.847271,
    percentageDifference2021: -33.34823266426722,
    percentageDifference2022: -33.3335339619533,
  },
  {
    company: "Gallagher",
    gwp2021: 540784.5368,
    gwp2022: 115333.5274,
    percentageDifference2021: -33.366458657642926,
    percentageDifference2022: -33.33508349719989,
  },
  {
    company: "Hendersons",
    gwp2021: 405770.5523,
    gwp2022: 501300.819,
    percentageDifference2021: -33.33444240421302,
    percentageDifference2022: -33.332320878052145,
  },
  {
    company: "Kentro",
    gwp2021: 96860.17905,
    gwp2022: 997785.3564,
    percentageDifference2021: -33.33611269447172,
    percentageDifference2022: -33.33385022289436,
  },
  {
    company: "Convex",
    gwp2021: 99861.56797,
    gwp2022: 831935.5456,
    percentageDifference2021: -33.36790361028848,
    percentageDifference2022: -33.33641342401674,
  },
  {
    company: "Tysers",
    gwp2021: 240378.8173,
    gwp2022: 912122.6381,
    percentageDifference2021: -33.33626234998899,
    percentageDifference2022: -33.33540583045604,
  },
  {
    company: "McGill",
    gwp2021: 673146.5883,
    gwp2022: 575548.7145,
    percentageDifference2021: -33.33870807130123,
    percentageDifference2022: -33.33510020228838,
  },
  {
    company: "Marsh",
    gwp2021: 838710.3449,
    gwp2022: 191502.1827,
    percentageDifference2021: -33.34728074604969,
    percentageDifference2022: -33.33653638133083,
  },
];

const dataFacilities2021 = [
  { company: "JLT", gwp: 335889.4383, plannedGwp: 503834.1575 },
  { company: "Willis", gwp: 227841.5319, plannedGwp: 341762.2979 },
  { company: "Aon", gwp: 820441.1325, plannedGwp: 1230661.699 },
  { company: "Miller", gwp: 121473.8711, plannedGwp: 182210.8067 },
  { company: "Balance", gwp: 703405.8872, plannedGwp: 1055108.831 },
  { company: "BMS", gwp: 971255.3747, plannedGwp: 1456883.062 },
  { company: "Convex", gwp: 79609.14792, plannedGwp: 119413.7219 },
  { company: "Tysers", gwp: 177177.8924, plannedGwp: 265766.8386 },
  { company: "McGill", gwp: 872954.7097, plannedGwp: 1309432.064 },
  { company: "Marsh", gwp: 120539.9394, plannedGwp: 180809.9091 },
  { company: "Gallagher", gwp: 108111.4883, plannedGwp: 162167.2325 },
  { company: "Kentro", gwp: 760445.0796, plannedGwp: 1140667.619 },
  { company: "Hendersons", gwp: 810428.7894, plannedGwp: 1215643.184 },
];

const dataFacilities2022 = [
  { company: "JLT", gwp: 804270.8117, plannedGwp: 1206406.218 },
  { company: "Willis", gwp: 400479.2259, plannedGwp: 600718.8389 },
  { company: "Aon", gwp: 590964.5555, plannedGwp: 886446.8333 },
  { company: "Miller", gwp: 520522.583, plannedGwp: 780783.8745 },
  { company: "Balance", gwp: 818040.2356, plannedGwp: 1227060.353 },
  { company: "BMS", gwp: 700721.6978, plannedGwp: 1051082.547 },
  { company: "Convex", gwp: 579046.2041, plannedGwp: 868569.3062 },
  { company: "Tysers", gwp: 261495.6655, plannedGwp: 392243.4983 },
  { company: "McGill", gwp: 670246.5034, plannedGwp: 1005369.755 },
  { company: "Marsh", gwp: 497828.908, plannedGwp: 746743.3619 },
  { company: "Gallagher", gwp: 573310.2748, plannedGwp: 859965.4122 },
  { company: "Kentro", gwp: 405060.608, plannedGwp: 607590.912 },
  { company: "Hendersons", gwp: 64439.62016, plannedGwp: 96659.43024 },
];

const combinedDataFacilitiesWithPercentage = [
  {
    company: "JLT",
    gwp2021: 335889.4383,
    gwp2022: 804270.8117,
    percentageDifference2021: -33.36801423340619,
    percentageDifference2022: -33.28869090327325,
  },
  {
    company: "Willis",
    gwp2021: 227841.5319,
    gwp2022: 400479.2259,
    percentageDifference2021: -33.332715536753525,
    percentageDifference2022: -33.37316839932101,
  },
  {
    company: "Aon",
    gwp2021: 820441.1325,
    gwp2022: 590964.5555,
    percentageDifference2021: -33.304806597866944,
    percentageDifference2022: -33.35219425830758,
  },
  {
    company: "Miller",
    gwp2021: 121473.8711,
    gwp2022: 520522.583,
    percentageDifference2021: -33.31927181926227,
    percentageDifference2022: -33.36980234209707,
  },
  {
    company: "Balance",
    gwp2021: 703405.8872,
    gwp2022: 818040.2356,
    percentageDifference2021: -33.27926564129658,
    percentageDifference2022: -33.33097883268327,
  },
  {
    company: "BMS",
    gwp2021: 971255.3747,
    gwp2022: 700721.6978,
    percentageDifference2021: -33.29490310004069,
    percentageDifference2022: -33.33731520230546,
  },
  {
    company: "Convex",
    gwp2021: 79609.14792,
    gwp2022: 579046.2041,
    percentageDifference2021: -33.38968923284034,
    percentageDifference2022: -33.37530523613361,
  },
  {
    company: "Tysers",
    gwp2021: 177177.8924,
    gwp2022: 261495.6655,
    percentageDifference2021: -33.32858779730049,
    percentageDifference2022: -33.34019475857304,
  },
  {
    company: "McGill",
    gwp2021: 872954.7097,
    gwp2022: 670246.5034,
    percentageDifference2021: -33.304702674857024,
    percentageDifference2022: -33.3451818851923,
  },
  {
    company: "Marsh",
    gwp2021: 120539.9394,
    gwp2022: 497828.908,
    percentageDifference2021: -33.37650759386964,
    percentageDifference2022: -33.33918139617919,
  },
  {
    company: "Gallagher",
    gwp2021: 108111.4883,
    gwp2022: 573310.2748,
    percentageDifference2021: -33.34451719055907,
    percentageDifference2022: -33.33474983582359,
  },
  {
    company: "Kentro",
    gwp2021: 760445.0796,
    gwp2022: 405060.608,
    percentageDifference2021: -33.32910613886223,
    percentageDifference2022: -33.33424102446437,
  },
  {
    company: "Hendersons",
    gwp2021: 810428.7894,
    gwp2022: 64439.62016,
    percentageDifference2021: -33.3305917751216,
    percentageDifference2022: -33.33267145683579,
  },
];

export const LeadenhallBarChart1 = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={dataOpen2021}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="company" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="gwp"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="plannedGwp" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const LeadenhallBarChart2 = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={dataOpen2022}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="company" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="gwp"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="plannedGwp" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const LeadenhallBarChart3 = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={combinedDataOpenMarketWithPercentage}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="company" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="gwp2021"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="gwp2022" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const LeadenhallBarChart7 = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={combinedDataOpenMarketWithPercentage}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="company" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="percentageDifference2021"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="percentageDifference2022"
          stroke="#82ca9d"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const LeadenhallBarChart4 = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={dataFacilities2021}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="company" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="gwp"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="plannedGwp" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const LeadenhallBarChart5 = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={dataFacilities2022}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="company" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="gwp"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="plannedGwp" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const LeadenhallBarChart6 = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={combinedDataFacilitiesWithPercentage}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="company" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="gwp2021"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="gwp2022" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const LeadenhallBarChart8 = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={combinedDataFacilitiesWithPercentage}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="company" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="percentageDifference2021"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="percentageDifference2022"
          stroke="#82ca9d"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
