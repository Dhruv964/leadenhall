import Providers from "@/components/layout/providers";
import { Toaster } from "@/components/ui/toaster";
import "@uploadthing/react/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
// import { UserValuesProvider } from './UserContext.js';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Blozum AI",
    template: "%s - Blozum",
  },
  description: "Analytics",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
        <Providers session={session}>
          {/* <UserValuesProvider> */}
          <Toaster />
          {children}
          {/* </UserValuesProvider> */}
        </Providers>
      </body>
    </html>
  );
}
