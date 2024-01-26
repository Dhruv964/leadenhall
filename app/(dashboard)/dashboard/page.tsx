"use client";

import { PieChart1 } from "@/components/PieChart1";
import { LineChart1 } from "@/components/LineChart1";
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
  MessageCircle,
  HelpCircle,
  Users,
  MousePointerClick,
  Bot,
  Activity,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import { signOut } from "next-auth/react";
import {
  useAnalyticsStore,
  useChatsStore,
  useCompanyStore,
} from "@/store/newt";
import { AccountSwitcher } from "./inbox/components/account-switcher";
import { Skeleton } from "@/components/ui/skeleton";
import { PieChart2 } from "@/components/PieChart2";

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

  const [analytics, setAnalytics] = useState([]);

  //STORES
  const { currCompany, setAllCompanies } = useCompanyStore();
  const { allAnalytics, setAllAnalytics } = useAnalyticsStore();
  const { setAllChats } = useChatsStore();

  useEffect(() => {
    async function apiOperation() {
      setLoading(true);
      const userResponse = await fetch("api/checkUsers", {
        method: "GET",
      });
      const userTemp = await userResponse.json();
      const userData = userTemp["documents"].find(
        (e: any) => e.email == session?.user?.email
      );

      if (userData == null) {
        signOut({ callbackUrl: "https://analytics.blozum.com/" });
      } else {
        // LOADING ALLOWED COMPANIES

        const companies = JSON.parse(userData["allowed_companies"]);

        //SENDING API CALLS -> Chats and Analytics of all companies
        const temp_all_companies = [];

        const messages = [];

        const analytics = [];

        for (const company of companies) {
          temp_all_companies.push(company);

          const chatsResponse = await fetch("api/chats", {
            method: "POST",
            body: JSON.stringify({
              databaseId: company.company_database_id,
              collectionId: company.chat_history_collection_id,
            }),
          });

          const chatData = await chatsResponse.json();

          messages.push(chatData["documents"]);

          const analyticsResponse = await fetch("api/analytics", {
            method: "POST",
            body: JSON.stringify({
              databaseId: company.company_database_id,
              collectionId: company.blozum_dashboard_analytics_collection,
            }),
          });

          const analyticsData = await analyticsResponse.json();

          analytics.push(analyticsData["documents"]);
        }

        const finalMessages: any = [];

        messages.forEach((messageSet) => {
          const combinedMessages: any = {};
          messageSet.forEach((message: any) => {
            const { user_id } = message;

            if (!combinedMessages[user_id]) {
              combinedMessages[user_id] = [];
            }

            combinedMessages[user_id].push(message);
          });
          finalMessages.push(Object.values(combinedMessages));
        });

        setAllCompanies(temp_all_companies);

        setAllAnalytics(analytics);

        setAllChats(finalMessages);

        //LOADING USER CREDENTIALS

        // console.log(allAnalytics);

        const data1 = analytics[currCompany];

        const buttonClicksData = JSON.parse(
          data1.find((doc: any) => doc.name_of_analytics === "button_clicks")[
            "daily_data_values"
          ]
        );

        const totalQuestionsData = JSON.parse(
          data1.find((doc: any) => doc.name_of_analytics === "total_questions")[
            "daily_data_values"
          ]
        );

        const averageBotResponseTimeData = JSON.parse(
          data1.find(
            (doc: any) => doc.name_of_analytics === "avg_bot_response_time"
          )["daily_data_values"]
        );

        const noOfUniqueConversationsData = JSON.parse(
          data1.find((doc: any) => doc.name_of_analytics === "unique_users")[
            "daily_data_values"
          ]
        );

        const averageConversationDurationData = JSON.parse(
          data1.find(
            (doc: any) => doc.name_of_analytics === "avg_conversation_duration"
          )["daily_data_values"]
        );

        const engagedConversationsData = JSON.parse(
          data1.find(
            (doc: any) => doc.name_of_analytics === "engaged_conversations"
          )["daily_data_values"]
        );

        // const today = new Date();
        // const yesterday = new Date(today);
        // // yesterday.setDate(today.getDate() - 1);
        // yesterday.setDate(today.getDate());

        // const month = yesterday.getMonth() + 1;
        // const formattedMonth = month < 10 ? `0${month}` : month;

        // const lastDate = `${yesterday.getDate()}-${formattedMonth}-${yesterday.getFullYear()}`;

        const dates = Object.keys(buttonClicksData);
        const lastDate = dates[dates.length - 1];
        const secondLastDate = dates[dates.length - 2];

        setButtonClicks(
          buttonClicksData[lastDate]["total_button_clicks"] -
            buttonClicksData[secondLastDate]["total_button_clicks"] || 0
        );
        setTotalQuestions(totalQuestionsData[lastDate] || 0);
        setAverageBotResponseTime(averageBotResponseTimeData[lastDate] || 0);
        setNoOfUniqueConversations(noOfUniqueConversationsData[lastDate] || 0);
        setAverageConversationDuration(
          averageConversationDurationData[lastDate] || 0
        );
        setEngagedConversations(engagedConversationsData[lastDate] || 0);

        setLoading(false);
      }
    }

    apiOperation();
  }, [currCompany]);

  return loading ? (
    <div className="flex items-center justify-center h-full">
      <div className="space-y-2">
        <Skeleton className="h-full w-full p-4 m-2 bg-secondary">
          Loading Information...
        </Skeleton>
      </div>
    </div>
  ) : (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back {session!.user?.name?.split(" ")[0]}
          </h2>
          <AccountSwitcher />
        </div>
        <div className=""></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Unique Users
              </CardTitle>
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

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Conversations Per Day</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <LineChart1 />
            </CardContent>
          </Card>
          <Card className="col-span-2 ">
            <CardHeader>
              <CardTitle>Button Clicks Share</CardTitle>
              <CardDescription>% Share of all Button Clicks</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart2 />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card className="col-span-2 ">
            <CardHeader>
              <CardTitle>CSAT</CardTitle>
              <CardDescription>
                % of satisfaction vs dissatisfaction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart1 />
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Recent Chats</CardTitle>
              <CardDescription>
                You initiated 265 chats this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Overview />
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
