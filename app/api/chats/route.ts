/* eslint-disable import/no-anonymous-default-export */
//@ts-nocheck
import { databases } from "@/appwrite";
import { NextRequest, NextResponse } from "next/server";
import { Query } from "node-appwrite";

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const chatData = await databases.listDocuments(
      body["databaseId"],
      body["collectionId"],
      [Query.orderDesc("$updatedAt"), Query.limit(1000)]
    );
    return NextResponse.json(chatData);
  } catch (error) {
    console.error("Error fetching documents:", error);
    return NextResponse.json(
      { error: "Failed to fetch documents" },
      { status: 500 }
    );
  }
}
