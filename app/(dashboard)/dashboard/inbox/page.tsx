"use client";
import { Mail } from "./components/mail";
// import { Metadata } from "next";
import { useCompanyStore } from "@/store/newt";
import { useRouter } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Inbox",
//   description: "All existing chats",
// };

export default function MailPage() {
  const defaultLayout = [40, 60]; // layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = true;

  const router = useRouter();

  const { allCompanies } = useCompanyStore();

  if (allCompanies.length === 0) {
    router.push("/dashboard");
  }

  return (
    <>
      <div className="flex-col flex">
        <Mail
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
