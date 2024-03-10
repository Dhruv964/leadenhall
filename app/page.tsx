"use client";
import { PieChart1 } from "@/components/PieChart1";
import { DualLineChart } from "@/components/LineChart1";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { BarChartShare } from "@/components/LineChart2";
import { ScatterChartSize } from "@/components/LineChart3";
import BrokerageRevenueBarChart from "@/components/BarChart1";
import {
  LeadenhallBarChart1,
  LeadenhallBarChart2,
  LeadenhallBarChart3,
  LeadenhallBarChart4,
  LeadenhallBarChart5,
  LeadenhallBarChart6,
  LeadenhallBarChart7,
  LeadenhallBarChart8,
} from "@/components/LeadenhallCharts";
import {
  ConsolidatedTableFacilities,
  ConsolidatedTableOpenMarket,
  ClassStatsTable,
} from "@/components/LeadenhallTables";

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back Leadenhall
          </h2>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>GWP vs Planned GWP for Open Market</CardTitle>
              <CardDescription>Annual Revenue in $ Billion</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="2022">
                <TabsList>
                  <TabsTrigger value="2021">2021</TabsTrigger>
                  <TabsTrigger value="2022">2022</TabsTrigger>
                  <TabsTrigger value="comparison">Comparison</TabsTrigger>
                  <TabsTrigger value="percent">
                    Actual VS Planned GWP
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="2021">
                  <LeadenhallBarChart1 />
                </TabsContent>
                <TabsContent value="2022">
                  <LeadenhallBarChart2 />
                </TabsContent>
                <TabsContent value="comparison">
                  <LeadenhallBarChart3 />
                </TabsContent>
                <TabsContent value="percent">
                  <LeadenhallBarChart7 />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card className="col-span-2 ">
            <CardHeader>
              <CardTitle>GWP vs Planned GWP for Facilities</CardTitle>
              <CardDescription>
                Gross written premium (GWP) is the total amount of money an
                insurer collects from customers for insurance policies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="2022">
                <TabsList>
                  <TabsTrigger value="2021">2021</TabsTrigger>
                  <TabsTrigger value="2022">2022</TabsTrigger>
                  <TabsTrigger value="comparison">Comparison</TabsTrigger>
                  <TabsTrigger value="percent">
                    Actual VS Planned GWP
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="2021">
                  <LeadenhallBarChart4 />
                </TabsContent>
                <TabsContent value="2022">
                  <LeadenhallBarChart5 />
                </TabsContent>
                <TabsContent value="comparison">
                  <LeadenhallBarChart6 />
                </TabsContent>
                <TabsContent value="percent">
                  <LeadenhallBarChart8 />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight mt-6 mb-3 mx-auto">
            Table Consolidating Broker Statistics
          </h1>
          <Tabs defaultValue="open" className="w-full">
            <TabsList>
              <TabsTrigger value="open">Open Market</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
            </TabsList>
            <TabsContent value="open">
              <ConsolidatedTableOpenMarket />
            </TabsContent>
            <TabsContent value="facilities">
              <ConsolidatedTableFacilities />
            </TabsContent>
          </Tabs>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>
                Marsh & McLennan Revenue - Annual Revenue in $ Billion
              </CardTitle>
              <CardDescription>
                Analysis of the biggest insurance company.
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <DualLineChart />
            </CardContent>
          </Card>
          <Card className="col-span-2 ">
            <CardHeader>
              <CardTitle>Market concentration by risk class</CardTitle>
              <CardDescription>
                The analysis highlights Aviation's high concentration. Energy
                has the highest share of GWP by the top 10 brokers, nearly 100%.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="share">
                <TabsList>
                  <TabsTrigger value="share">Share</TabsTrigger>
                  <TabsTrigger value="size">GWP Size</TabsTrigger>
                </TabsList>
                <TabsContent value="share">
                  <BarChartShare />
                </TabsContent>
                <TabsContent value="size">
                  <ScatterChartSize />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card className="col-span-2 ">
            <CardHeader>
              <CardTitle>Years in Operations (5-StarBrokerages)</CardTitle>
              <CardDescription>Insurance Business</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart1 />
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Top 15 largest insurance brokerages</CardTitle>
              <CardDescription>Annual Revenue in $ Billion</CardDescription>
            </CardHeader>
            <CardContent>
              <BrokerageRevenueBarChart />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight mt-6 mb-3 mx-auto">
          Table Consolidating Class Statistics
        </h1>
        <ClassStatsTable />
      </div>
    </ScrollArea>
  );
}
