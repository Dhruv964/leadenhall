/* eslint-disable import/no-anonymous-default-export */
//@ts-nocheck
import { databases } from "@/appwrite";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  //Gets the user documents

  const documents = await databases.listDocuments(
    "BLZ_Analytics_Dashboard",
    "analytics_dashboard_users"
  );

  return NextResponse.json(documents);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  return new Response("Ok");
}
