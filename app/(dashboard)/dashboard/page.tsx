"use client";
import { CSATPie } from "@/components/CSATPie";
import { ConversationChart } from "@/components/ConversationChart";
import { ChatChart } from "@/components/ChatChart";
import { Overview } from "@/components/overview";
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
import {
  MessageCircle,
  HelpCircle,
  Users,
  MousePointerClick,
  Bot,
  Activity,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

export default function page() {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(true);

  //CARD ANALYTICS

  const [buttonClicks, setButtonClicks] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [averageBotResponseTime, setAverageBotResponseTime] = useState(0);
  const [noOfUniqueConversations, setNoOfUniqueConversations] = useState(0);
  const [averageConversationDuration, setAverageConversationDuration] =
    useState(0);
  const [engagedConversations, setEngagedConversations] = useState(0);

  useEffect(() => {
    async function check() {
      const response = await fetch("api/checkPremium", {
        method: "GET",
      });
      const data = await response.json();
      // console.log(data);
      const userData = data["documents"].find(
        (e: any) => e.email == session?.user?.email
      );
      if (userData == null) {
        console.log("logged out");
        signOut({ callbackUrl: "https://analytics.blozum.com/" });
      } else {
        setLoading(false);
        const response = await fetch("api/analytics", {
          method: "GET",
        });
        const data1 = await response.json();

        const buttonClicksData = JSON.parse(data1.button_clicks);
        const totalQuestionsData = JSON.parse(data1.total_questions);
        const averageBotResponseTimeData = JSON.parse(
          data1.average_bot_response_time
        );
        const noOfUniqueConversationsData = JSON.parse(
          data1.no_of_unique_conversations
        );
        const averageConversationDurationData = JSON.parse(
          data1.average_conversation_duration
        );
        const engagedConversationsData = JSON.parse(
          data1.engaged_conversations
        );

        const today = new Date();
        const yesterday = new Date(today);
        // yesterday.setDate(today.getDate() - 1);
        yesterday.setDate(today.getDate());

        const month = yesterday.getMonth() + 1;
        const formattedMonth = month < 10 ? `0${month}` : month;

        const formattedYesterday = `${yesterday.getDate()}-${formattedMonth}-${yesterday.getFullYear()}`;

        setButtonClicks(buttonClicksData[formattedYesterday] || 0);
        setTotalQuestions(totalQuestionsData[formattedYesterday] || 0);
        setAverageBotResponseTime(
          averageBotResponseTimeData[formattedYesterday] || 0
        );
        setNoOfUniqueConversations(
          noOfUniqueConversationsData[formattedYesterday] || 0
        );
        setAverageConversationDuration(
          averageConversationDurationData[formattedYesterday] || 0
        );
        setEngagedConversations(
          engagedConversationsData[formattedYesterday] || 0
        );

        console.log(data1);
        console.log("login success");
      }
    }

    check();
  }, [session]);

  return loading ? (
    <div className="flex items-center justify-center h-full">
      Loading Final Bit of Information...
    </div>
  ) : (
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
              <div className="text-2xl font-bold">
                {noOfUniqueConversations.toLocaleString()}
              </div>
              {/* <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Conversation Duration (sec)
              </CardTitle>
              <MessageCircle />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {averageConversationDuration.toLocaleString()}
              </div>
              {/* <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p> */}
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
              <div className="text-2xl font-bold">
                {totalQuestions.toLocaleString()}
              </div>
              {/* <p className="text-xs text-muted-foreground">
                +19% from last month
              </p> */}
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
              <div className="text-2xl font-bold">
                {buttonClicks.toLocaleString()}
              </div>
              {/* <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Bot Response Time (sec)
              </CardTitle>
              <Bot />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {averageBotResponseTime.toLocaleString()}
              </div>
              {/* <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Engaged Users
              </CardTitle>
              <Activity />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {engagedConversations.toLocaleString()}
              </div>
              {/* <p className="text-xs text-muted-foreground">
                +19% from last month
              </p> */}
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
