import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import { useState } from "react";
import { Label } from "./ui/label";

const consolidatedArrayOpenMarket = [
  {
    company: "Miller",
    gwp2021: 528491.5777,
    gwp2022: 255148.3673,
    plannedGwp2021: 792737.3665,
    plannedGwp2022: 382722.5509,
    percentageDifference2021: -33.36787261708746,
    percentageDifference2022: -33.3645667910381,
  },
  {
    company: "Howden",
    gwp2021: 181322.5075,
    gwp2022: 985050.2897,
    plannedGwp2021: 271983.7612,
    plannedGwp2022: 1477575.435,
    percentageDifference2021: -33.361334067990155,
    percentageDifference2022: -33.333086329102556,
  },
  {
    company: "Aon",
    gwp2021: 84163.92827,
    gwp2022: 794263.14,
    plannedGwp2021: 126245.8924,
    plannedGwp2022: 1191394.71,
    percentageDifference2021: -33.33375876144931,
    percentageDifference2022: -33.33156510654916,
  },
  {
    company: "Besso",
    gwp2021: 81961.47385,
    gwp2022: 704360.7992,
    plannedGwp2021: 122942.2108,
    plannedGwp2022: 1056541.199,
    percentageDifference2021: -33.33628509880335,
    percentageDifference2022: -33.33768821053546,
  },
  {
    company: "Croton Stokes",
    gwp2021: 988720.6725,
    gwp2022: 279452.7275,
    plannedGwp2021: 1483081.009,
    plannedGwp2022: 419179.0912,
    percentageDifference2021: -33.336358703644924,
    percentageDifference2022: -33.33689689714482,
  },
  {
    company: "Balance",
    gwp2021: 492444.4544,
    gwp2022: 15948.38589,
    plannedGwp2021: 738666.6816,
    plannedGwp2022: 23922.57883,
    percentageDifference2021: -33.323409697399654,
    percentageDifference2022: -33.338073294621244,
  },
  {
    company: "BMS",
    gwp2021: 322499.6381,
    gwp2022: 8139.847271,
    plannedGwp2021: 483749.4572,
    plannedGwp2022: 12209.77091,
    percentageDifference2021: -33.34823266426722,
    percentageDifference2022: -33.3335339619533,
  },
  {
    company: "Gallagher",
    gwp2021: 540784.5368,
    gwp2022: 115333.5274,
    plannedGwp2021: 811176.8053,
    plannedGwp2022: 173000.2911,
    percentageDifference2021: -33.366458657642926,
    percentageDifference2022: -33.33508349719989,
  },
  {
    company: "Hendersons",
    gwp2021: 405770.5523,
    gwp2022: 501300.819,
    plannedGwp2021: 608655.8284,
    plannedGwp2022: 751951.2285,
    percentageDifference2021: -33.33444240421302,
    percentageDifference2022: -33.332320878052145,
  },
  {
    company: "Kentro",
    gwp2021: 96860.17905,
    gwp2022: 997785.3564,
    plannedGwp2021: 145290.2686,
    plannedGwp2022: 1496678.035,
    percentageDifference2021: -33.33611269447172,
    percentageDifference2022: -33.33385022289436,
  },
  {
    company: "Convex",
    gwp2021: 99861.56797,
    gwp2022: 831935.5456,
    plannedGwp2021: 149792.352,
    plannedGwp2022: 1247903.318,
    percentageDifference2021: -33.36790361028848,
    percentageDifference2022: -33.33641342401674,
  },
  {
    company: "Tysers",
    gwp2021: 240378.8173,
    gwp2022: 912122.6381,
    plannedGwp2021: 360568.226,
    plannedGwp2022: 1368183.957,
    percentageDifference2021: -33.33626234998899,
    percentageDifference2022: -33.33540583045604,
  },
  {
    company: "McGill",
    gwp2021: 673146.5883,
    gwp2022: 575548.7145,
    plannedGwp2021: 1009719.882,
    plannedGwp2022: 863323.0717,
    percentageDifference2021: -33.33870807130123,
    percentageDifference2022: -33.33510020228838,
  },
  {
    company: "Marsh",
    gwp2021: 838710.3449,
    gwp2022: 191502.1827,
    plannedGwp2021: 1258065.517,
    plannedGwp2022: 287253.274,
    percentageDifference2021: -33.34728074604969,
    percentageDifference2022: -33.33653638133083,
  },
];

const consolidatedFacilitiesArray = [
  {
    company: "JLT",
    gwp2021: 335889.4383,
    gwp2022: 804270.8117,
    plannedGwp2021: 503834.1575,
    plannedGwp2022: 1206406.218,
    percentageDifference2021: -33.36801423340619,
    percentageDifference2022: -33.28869090327325,
  },
  {
    company: "Willis",
    gwp2021: 227841.5319,
    gwp2022: 400479.2259,
    plannedGwp2021: 341762.2979,
    plannedGwp2022: 600718.8389,
    percentageDifference2021: -33.332715536753525,
    percentageDifference2022: -33.37316839932101,
  },
  {
    company: "Aon",
    gwp2021: 820441.1325,
    gwp2022: 590964.5555,
    plannedGwp2021: 1230661.699,
    plannedGwp2022: 886446.8333,
    percentageDifference2021: -33.304806597866944,
    percentageDifference2022: -33.35219425830758,
  },
  {
    company: "Miller",
    gwp2021: 121473.8711,
    gwp2022: 520522.583,
    plannedGwp2021: 182210.8067,
    plannedGwp2022: 780783.8745,
    percentageDifference2021: -33.31927181926227,
    percentageDifference2022: -33.36980234209707,
  },
  {
    company: "Balance",
    gwp2021: 703405.8872,
    gwp2022: 818040.2356,
    plannedGwp2021: 1055108.831,
    plannedGwp2022: 1227060.353,
    percentageDifference2021: -33.27926564129658,
    percentageDifference2022: -33.33097883268327,
  },
  {
    company: "BMS",
    gwp2021: 971255.3747,
    gwp2022: 700721.6978,
    plannedGwp2021: 1456883.062,
    plannedGwp2022: 1051082.547,
    percentageDifference2021: -33.29490310004069,
    percentageDifference2022: -33.33731520230546,
  },
  {
    company: "Convex",
    gwp2021: 79609.14792,
    gwp2022: 579046.2041,
    plannedGwp2021: 119413.7219,
    plannedGwp2022: 868569.3062,
    percentageDifference2021: -33.38968923284034,
    percentageDifference2022: -33.37530523613361,
  },
  {
    company: "Tysers",
    gwp2021: 177177.8924,
    gwp2022: 261495.6655,
    plannedGwp2021: 265766.8386,
    plannedGwp2022: 392243.4983,
    percentageDifference2021: -33.32858779730049,
    percentageDifference2022: -33.34019475857304,
  },
  {
    company: "McGill",
    gwp2021: 872954.7097,
    gwp2022: 670246.5034,
    plannedGwp2021: 1309432.064,
    plannedGwp2022: 1005369.755,
    percentageDifference2021: -33.304702674857024,
    percentageDifference2022: -33.3451818851923,
  },
  {
    company: "Marsh",
    gwp2021: 120539.9394,
    gwp2022: 497828.908,
    plannedGwp2021: 180809.9091,
    plannedGwp2022: 746743.3619,
    percentageDifference2021: -33.37650759386964,
    percentageDifference2022: -33.33918139617919,
  },
  {
    company: "Gallagher",
    gwp2021: 108111.4883,
    gwp2022: 573310.2748,
    plannedGwp2021: 162167.2325,
    plannedGwp2022: 859965.4122,
    percentageDifference2021: -33.34451719055907,
    percentageDifference2022: -33.33474983582359,
  },
  {
    company: "Kentro",
    gwp2021: 760445.0796,
    gwp2022: 405060.608,
    plannedGwp2021: 1140667.619,
    plannedGwp2022: 607590.912,
    percentageDifference2021: -33.32910613886223,
    percentageDifference2022: -33.33424102446437,
  },
  {
    company: "Hendersons",
    gwp2021: 810428.7894,
    gwp2022: 64439.62016,
    plannedGwp2021: 1215643.184,
    plannedGwp2022: 96659.43024,
    percentageDifference2021: -33.3305917751216,
    percentageDifference2022: -33.33267145683579,
  },
];

const data = [
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "Crime",
    BusinessPlan: 3394741,
    EarnedPremium: 997433,
    GWP: 1296662,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "FIPI",
    BusinessPlan: 3176909,
    EarnedPremium: 286415,
    GWP: 372339,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "D&O",
    BusinessPlan: 753794,
    EarnedPremium: 20313,
    GWP: 26407,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "Crime",
    BusinessPlan: 1233886,
    EarnedPremium: 964000,
    GWP: 1253199,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "FIPI",
    BusinessPlan: 4274607,
    EarnedPremium: 181602,
    GWP: 236082,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "D&O",
    BusinessPlan: 2763863,
    EarnedPremium: 554720,
    GWP: 721136,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "Crime",
    BusinessPlan: 547030,
    EarnedPremium: 113394,
    GWP: 147412,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "FIPI",
    BusinessPlan: 3427263,
    EarnedPremium: 781318,
    GWP: 1015714,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "D&O",
    BusinessPlan: 2027759,
    EarnedPremium: 323575,
    GWP: 420648,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "Crime",
    BusinessPlan: 97834,
    EarnedPremium: 337040,
    GWP: 438151,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "FIPI",
    BusinessPlan: 220407,
    EarnedPremium: 803516,
    GWP: 1044571,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "D&O",
    BusinessPlan: 1859327,
    EarnedPremium: 689803,
    GWP: 896744,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "Crime",
    BusinessPlan: 2803088,
    EarnedPremium: 46883,
    GWP: 60948,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "FIPI",
    BusinessPlan: 2697379,
    EarnedPremium: 606219,
    GWP: 788084,
  },
  {
    Year: 2021,
    ClassofBusiness: "Financial Institution",
    ClassType: "D&O",
    BusinessPlan: 4946601,
    EarnedPremium: 309120,
    GWP: 401855,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 1733388,
    EarnedPremium: 377211,
    GWP: 490375,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 3000811,
    EarnedPremium: 637997,
    GWP: 829396,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 1551108,
    EarnedPremium: 283450,
    GWP: 368485,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 2335509,
    EarnedPremium: 235217,
    GWP: 305782,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 2457146,
    EarnedPremium: 212852,
    GWP: 276707,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 216132,
    EarnedPremium: 503653,
    GWP: 654749,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 2420383,
    EarnedPremium: 477959,
    GWP: 621347,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 4410724,
    EarnedPremium: 657029,
    GWP: 854137,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 2027745,
    EarnedPremium: 675687,
    GWP: 878393,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 3647362,
    EarnedPremium: 594016,
    GWP: 772221,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 2213853,
    EarnedPremium: 391492,
    GWP: 508940,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 2215647,
    EarnedPremium: 839810,
    GWP: 1091753,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 3116710,
    EarnedPremium: 69643,
    GWP: 90536,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 1226781,
    EarnedPremium: 926341,
    GWP: 1204243,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 728337,
    EarnedPremium: 91425,
    GWP: 118852,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 1155300,
    EarnedPremium: 688570,
    GWP: 895141,
  },
  {
    Year: 2021,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 901923,
    EarnedPremium: 732525,
    GWP: 952282,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "Crime",
    BusinessPlan: 477836,
    EarnedPremium: 604961,
    GWP: 621187,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "FIPI",
    BusinessPlan: 744666,
    EarnedPremium: 456007,
    GWP: 968066,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "D&O",
    BusinessPlan: 535143,
    EarnedPremium: 350677,
    GWP: 695686,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "Crime",
    BusinessPlan: 266430,
    EarnedPremium: 265856,
    GWP: 346359,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "FIPI",
    BusinessPlan: 545661,
    EarnedPremium: 704725,
    GWP: 709360,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "D&O",
    BusinessPlan: 70097,
    EarnedPremium: 463657,
    GWP: 91125,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "Crime",
    BusinessPlan: 614613,
    EarnedPremium: 93895,
    GWP: 798997,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "FIPI",
    BusinessPlan: 575902,
    EarnedPremium: 671804,
    GWP: 748673,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "D&O",
    BusinessPlan: 284195,
    EarnedPremium: 182719,
    GWP: 369454,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "Crime",
    BusinessPlan: 382158,
    EarnedPremium: 937773,
    GWP: 496805,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "FIPI",
    BusinessPlan: 585380,
    EarnedPremium: 533444,
    GWP: 760994,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "D&O",
    BusinessPlan: 434169,
    EarnedPremium: 299001,
    GWP: 564420,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "Crime",
    BusinessPlan: 698735,
    EarnedPremium: 322340,
    GWP: 908356,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "FIPI",
    BusinessPlan: 101695,
    EarnedPremium: 67276,
    GWP: 132203,
  },
  {
    Year: 2022,
    ClassofBusiness: "Financial Institution",
    ClassType: "D&O",
    BusinessPlan: 890532,
    EarnedPremium: 611878,
    GWP: 1157691,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 393736,
    EarnedPremium: 50607,
    GWP: 511857,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 26155,
    EarnedPremium: 201318,
    GWP: 34001,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 880534,
    EarnedPremium: 391246,
    GWP: 1144694,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 419011,
    EarnedPremium: 816784,
    GWP: 544714,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 144535,
    EarnedPremium: 330032,
    GWP: 187895,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 906945,
    EarnedPremium: 778406,
    GWP: 1179029,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 450145,
    EarnedPremium: 260897,
    GWP: 585189,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 904679,
    EarnedPremium: 313715,
    GWP: 1176083,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 629789,
    EarnedPremium: 643565,
    GWP: 818726,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 119251,
    EarnedPremium: 280734,
    GWP: 155026,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 768374,
    EarnedPremium: 598304,
    GWP: 998887,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 400844,
    EarnedPremium: 756721,
    GWP: 521097,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 609807,
    EarnedPremium: 472576,
    GWP: 792749,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 384931,
    EarnedPremium: 513460,
    GWP: 500410,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 239681,
    EarnedPremium: 506542,
    GWP: 311586,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 446797,
    EarnedPremium: 942128,
    GWP: 580835,
  },
  {
    Year: 2022,
    ClassofBusiness: "Commercial PI",
    ClassType: "PI",
    BusinessPlan: 140457,
    EarnedPremium: 952097,
    GWP: 182593,
  },
];

export const ConsolidatedTableOpenMarket = () => {
  return (
    <Table>
      <TableCaption>Table Consolidating Open Market Data</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>GWP 2021</TableHead>
          <TableHead>GWP 2022</TableHead>
          <TableHead>Planned GWP 2021</TableHead>
          <TableHead>Planned GWP 2022</TableHead>
          <TableHead>% Difference 2021</TableHead>
          <TableHead>% Difference 2022</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {consolidatedArrayOpenMarket.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.company}</TableCell>
            <TableCell>{row.gwp2021}</TableCell>
            <TableCell>{row.gwp2022}</TableCell>
            <TableCell>{row.plannedGwp2021}</TableCell>
            <TableCell>{row.plannedGwp2022}</TableCell>
            <TableCell>{row.percentageDifference2021}</TableCell>
            <TableCell>{row.percentageDifference2022}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const ConsolidatedTableFacilities = () => {
  return (
    <Table>
      <TableCaption>Table Consolidating Open Market Data</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>GWP 2021</TableHead>
          <TableHead>GWP 2022</TableHead>
          <TableHead>Planned GWP 2021</TableHead>
          <TableHead>Planned GWP 2022</TableHead>
          <TableHead>% Difference 2021</TableHead>
          <TableHead>% Difference 2022</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {consolidatedFacilitiesArray.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.company}</TableCell>
            <TableCell>{row.gwp2021}</TableCell>
            <TableCell>{row.gwp2022}</TableCell>
            <TableCell>{row.plannedGwp2021}</TableCell>
            <TableCell>{row.plannedGwp2022}</TableCell>
            <TableCell>{row.percentageDifference2021}</TableCell>
            <TableCell>{row.percentageDifference2022}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const ClassStatsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex flex-col">
      <Label className="ml-4">
        Search any field - Year, Class of Business, Class Type, Business Plan,
        Earned Premium or GWP
      </Label>
      <Input
        type="text"
        placeholder="Search"
        className="max-w-xl ml-5 mb-5 mt-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Table className="max-h-xl overflow-scroll">
        <TableCaption>
          Table Consolidating Class Statistics across 2021 and 2022
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Year</TableHead>
            <TableHead>Class of Business</TableHead>
            <TableHead>Class Type</TableHead>
            <TableHead>Business Plan</TableHead>
            <TableHead>Earned Premium</TableHead>
            <TableHead>GWP</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data
            .filter((row) => {
              const values = Object.values(row);
              return values.some((value) =>
                String(value).toLowerCase().includes(searchQuery.toLowerCase())
              );
            })
            .map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.Year}</TableCell>
                <TableCell>{row.ClassofBusiness}</TableCell>
                <TableCell>{row.ClassType}</TableCell>
                <TableCell>{row.BusinessPlan}</TableCell>
                <TableCell>{row.EarnedPremium}</TableCell>
                <TableCell>{row.GWP}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};
