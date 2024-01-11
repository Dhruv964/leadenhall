"use client";
import { CSATPie } from "@/components/CSATPie";
import { ConversationChart } from "@/components/ConversationChart";
import { ChatChart } from "@/components/ChatChart";
import MiniLineChart from "@/components/miniLineChart";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageCircle,
  HelpCircle,
  Users,
  MousePointerClick,
  Bot,
  Activity,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { accounts } from "./inbox/data";

export default async function page() {
  const { data: session } = useSession();
  if (session) {
      const email = session.user?.email; 
      const response = await fetch('api/check_if_email_exists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      console.log(data);
  }

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back {session!.user?.name?.split(" ")[0]}
          </h2>
          <div className="hidden md:flex items-center space-x-2">
            <Select defaultValue={"itc"}>
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="itc">ITC</SelectItem>
                <SelectItem value="company1">company1</SelectItem>
                <SelectItem value="company2">company2</SelectItem>
                <SelectItem value="company3">company3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=""></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">223</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Conversations
              </CardTitle>
              <MessageCircle />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Questions
              </CardTitle>
              <HelpCircle />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Button Clicks (total)
              </CardTitle>
              <MousePointerClick />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45,000</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Bot Response Time
              </CardTitle>
              <Bot />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Bot Response Rate
              </CardTitle>
              <Activity />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Average Conversations Per Day</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ConversationChart />
            </CardContent>
          </Card>
          <Card className="col-span-4 md:col-span-3">
            <CardHeader>
              <CardTitle>Button Clicks</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-8">
          <Card className="col-span-2 md:col-span-4 ">
            <CardHeader>
              <CardTitle>CSAT</CardTitle>
              <CardDescription>
                % of satisfaction vs dissatisfaction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CSATPie />
            </CardContent>
          </Card>
          <Card className="col-span-2 md:col-span-4 ">
            <CardHeader>
              <CardTitle>Recent Chats</CardTitle>
              <CardDescription>
                You initiated 265 chats this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChatChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
