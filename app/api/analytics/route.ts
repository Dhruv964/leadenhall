/* eslint-disable import/no-anonymous-default-export */
//@ts-nocheck
import { databases } from "@/appwrite";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  //Gets the user documents

  const data1 = await databases.getDocument(
    "BLZ_Website",
    "blozum_dashboard_analytics",
    "65a18edd66aba598a945"
  );

  return NextResponse.json(data1);
}
