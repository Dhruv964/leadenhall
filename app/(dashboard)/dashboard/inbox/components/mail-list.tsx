"use client";

import { ComponentProps, useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatsStore, useCompanyStore } from "@/store/newt";
import { useRouter } from "next/navigation";
import { MdPerson4 } from "react-icons/md";
import { BsRobot } from "react-icons/bs";

export function MailList() {
  const { allChats, setAllChats, selectedChat, setSelectedChat } =
    useChatsStore();
  const { currCompany } = useCompanyStore();

  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (allChats.length == 0) {
      router.push("/dashboard");
    } else {
      setLoading(false);
    }
  }, [currCompany, allChats]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {allChats[currCompany].map((chat: any) => (
          <button
            key={chat["$id"]}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              selectedChat === chat["$id"] && "bg-muted"
            )}
            onClick={() => setSelectedChat(chat["$id"])}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold flex items-center gap-2">
                    <div style={{ width: "20px", height: "20px" }}>
                      <MdPerson4 />
                    </div>
                    {chat["user_message"]}
                  </div>
                  {/* {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )} */}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    selectedChat === chat["$id"]
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {formatDistanceToNow(new Date(chat["$updatedAt"]), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div style={{ width: "20px", height: "20px" }}>
                <BsRobot />
              </div>
              <span className="line-clamp-2 text-xs text-muted-foreground ">
                {chat.assistant_message.substring(0, 300)}
              </span>
            </div>
            {/* {chat.user_message.length ? null : (
              <div className="flex items-center gap-2">
                {chat.labels.map((label) => (
                  <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>
                ))}
              </div>
            )} */}
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default";
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline";
  }

  return "secondary";
}
