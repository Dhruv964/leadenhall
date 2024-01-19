/* eslint-disable import/no-anonymous-default-export */
//@ts-nocheck
import { databases } from "@/appwrite";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//   //Gets the user documents

//   const data1 = await databases.listDocuments(
//     "65029fc22a51f570ac8e",
//     "blozum_dashboard_analytics"
//     // "65a18edd66aba598a945"
//   );

//   return NextResponse.json(data1);
// }

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const analyticsData = await databases.listDocuments(
      body["databaseId"],
      body["collectionId"]
    );
    return NextResponse.json(analyticsData);
  } catch (error) {
    console.error("Error fetching documents:", error);
    return NextResponse.json(
      { error: "Failed to fetch documents" },
      { status: 500 }
    );
  }
}
