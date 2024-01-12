/* eslint-disable import/no-anonymous-default-export */
//@ts-nocheck
import { databases } from "@/appwrite";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  //Gets the user documents

  const data1 = await databases.getDocument(
    "BLZ_Website",
    "BLZ_Analytics",
    "65a000373a4677871ade"
  );

  return NextResponse.json(data1);
}
