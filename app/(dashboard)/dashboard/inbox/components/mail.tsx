"use client";
import { useEffect, useState } from "react";

import { AccountSwitcher } from "./account-switcher";
import { MailDisplay } from "./mail-display";
import { MailList } from "./mail-list";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { IoIosRefresh } from "react-icons/io";
import { useRouter } from "next/navigation";

interface MailProps {
  // accounts: {
  //   label: string;
  //   email: string;
  //   icon: React.ReactNode;
  // }[];
  // mails: MailType[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export function Mail({
  // accounts,
  // mails,
  defaultLayout = [5.5, 440, 655],
  defaultCollapsed = true,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  // const [mail] = useMail();

  const router = useRouter();

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel defaultSize={defaultLayout[0]}>
          <div className="flex items-center px-4 py-2">
            <h1 className="text-xl font-bold">Inbox</h1>
            <div
              className="ml-3 cursor-pointer"
              onClick={() => router.push("/dashboard")}
            >
              <IoIosRefresh />
            </div>
            <div className="ml-auto">
              <AccountSwitcher />
            </div>
          </div>
          <Separator />
          <MailList />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]}>
          <MailDisplay />
        </ResizablePanel>
        {/* <ResizableHandle withHandle /> */}
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
