import { cookies } from "next/headers";
import Image from "next/image";

import { Mail } from "./components/mail";
import { accounts, mails } from "./data";

export default function MailPage() {
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = [5, 47.25, 47.25]; // layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = true;

  return (
    <>
      <div className="flex-col flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
