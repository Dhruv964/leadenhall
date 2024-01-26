import addDays from "date-fns/addDays";
import addHours from "date-fns/addHours";
import format from "date-fns/format";
import nextSaturday from "date-fns/nextSaturday";
import {
  Archive,
  ArchiveX,
  Clock,
  Forward,
  MoreVertical,
  Plus,
  Reply,
  ReplyAll,
  Trash2,
} from "lucide-react";

import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { useChatsStore, useCompanyStore } from "@/store/newt";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MdPerson4 } from "react-icons/md";
import { BsRobot } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function MailDisplay() {
  const today = new Date();
  const router = useRouter();

  const { allChats, selectedChat } = useChatsStore();
  const { currCompany, allCompanies } = useCompanyStore();

  if (!allChats || !allCompanies) {
    router.push("/dashbboard");
  }

  const [messages, setMessages] = useState<any>([]);
  const [date, setDate] = useState("");
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    try {
      const data = allChats[currCompany][selectedChat];
      if (data.length === 0) {
        router.push("/dashboard");
      } else {
        const temp = [];
        for (const message of data) {
          const dateObject = new Date(message["$createdAt"]);
          const hours = dateObject.getHours();
          const minutes = dateObject.getMinutes();

          const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
            minutes < 10 ? "0" : ""
          }${minutes}`;
          console.log(message);
          temp.push({
            role: "agent",
            content: message["assistant_message"],
            time: formattedTime,
          });
          temp.push({
            role: "user",
            content: message["user_message"],
            time: formattedTime,
          });
          setDate(
            format(new Date(message["$createdAt"]), "MMMM dd, yyyy HH:mm:ss")
          );
        }
        setCompanyName(allCompanies[currCompany]["company_name"]);
        setMessages(temp.reverse());
      }
    } catch (e) {
      router.push("/dashboard");
    }
  }, [currCompany, selectedChat, allChats]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Archive className="h-4 w-4" />
                <span className="sr-only">Archive</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Archive</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <ArchiveX className="h-4 w-4" />
                <span className="sr-only">Move to junk</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Move to junk</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Move to trash</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Move to trash</TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="mx-1 h-6" />
          <Tooltip>
            <Popover>
              <PopoverTrigger asChild>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Clock className="h-4 w-4" />
                    <span className="sr-only">Snooze</span>
                  </Button>
                </TooltipTrigger>
              </PopoverTrigger>
              <PopoverContent className="flex w-[535px] p-0">
                <div className="flex flex-col gap-2 border-r px-2 py-4">
                  <div className="px-4 text-sm font-medium">Snooze until</div>
                  <div className="grid min-w-[250px] gap-1">
                    <Button
                      variant="ghost"
                      className="justify-start font-normal"
                    >
                      Later today{" "}
                      <span className="ml-auto text-muted-foreground">
                        {format(addHours(today, 4), "E, h:m b")}
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start font-normal"
                    >
                      Tomorrow
                      <span className="ml-auto text-muted-foreground">
                        {format(addDays(today, 1), "E, h:m b")}
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start font-normal"
                    >
                      This weekend
                      <span className="ml-auto text-muted-foreground">
                        {format(nextSaturday(today), "E, h:m b")}
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start font-normal"
                    >
                      Next week
                      <span className="ml-auto text-muted-foreground">
                        {format(addDays(today, 7), "E, h:m b")}
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="p-2">
                  <Calendar />
                </div>
              </PopoverContent>
            </Popover>
            <TooltipContent>Snooze</TooltipContent>
          </Tooltip>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Reply className="h-4 w-4" />
                <span className="sr-only">Reply</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reply</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <ReplyAll className="h-4 w-4" />
                <span className="sr-only">Reply all</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reply all</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Forward className="h-4 w-4" />
                <span className="sr-only">Forward</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Forward</TooltipContent>
          </Tooltip>
        </div>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Mark as unread</DropdownMenuItem>
            <DropdownMenuItem>Star thread</DropdownMenuItem>
            <DropdownMenuItem>Add label</DropdownMenuItem>
            <DropdownMenuItem>Mute thread</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator />

      {messages ? (
        <ScrollArea className="h-screen">
          <Card className="h-full mb-[200px] bg-transparent border-none">
            <CardHeader className="flex flex-row items-center content-between">
              <div className="flex items-center space-x-6">
                <Avatar>
                  <AvatarImage src="/avatars/01.png" alt="Image" />
                  <AvatarFallback>
                    {companyName!.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    {companyName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Customer Questionnaire
                  </p>
                </div>
                <div className="text-sm text-muted-foreground pl-5">{date}</div>
              </div>

              {/* <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="ml-auto rounded-full"
                    onClick={() => setOpen(true)}
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">New message</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={10}>New message</TooltipContent>
              </Tooltip>
            </TooltipProvider> */}
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {messages.map((message: any, index: number) => (
                  <div
                    key={index}
                    className={cn(
                      "flex w-max flex-col gap-2 rounded-lg px-3 py-2 text-sm max-w-md md:max-w-xl text-wrap",
                      message.role === "agent"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    {message.role === "agent" ? <BsRobot /> : <MdPerson4 />}
                    {message.content}
                    <div
                      className={cn(
                        "text-sm",
                        message.role === "agent"
                          ? "text-gray-600"
                          : "text-muted-foreground"
                      )}
                    >
                      {message.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            {/* <CardContent>
            <div className="space-y-4">
              {messages.map((message: any, index: number) => {
                <div className="p-1">
                  hi
                  {/* <div className="text-sm text-muted-foreground pl-5">
                    {format(
                      new Date(message["$createdAt"]),
                      "MMMM dd, yyyy HH:mm:ss"
                    )}
                  </div>
                  <div className="flex-end w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
                    {message["user_message"]}
                  </div>
                  <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-primary text-primary-foreground">
                    {message["assistant_message"]}
                  </div> 
                </div>;
              })}
            </div>
          </CardContent> */}
            <CardFooter></CardFooter>
          </Card>
        </ScrollArea>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
  );
}
