import Providers from "@/components/layout/providers";
import { Toaster } from "@/components/ui/toaster";
import "@uploadthing/react/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import Header from "@/components/layout/header";
// import { UserValuesProvider } from './UserContext.js';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Leadenhall",
    template: "%s - Leadenhall",
  },
  description: "Analytics",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
        <Header />
        <div className="flex h-screen overflow-hidden">
          {/* <Sidebar /> */}
          <main className="w-full pt-16">{children}</main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
