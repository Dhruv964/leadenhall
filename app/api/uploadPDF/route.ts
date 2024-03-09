/* eslint-disable import/no-anonymous-default-export */
//@ts-nocheck
import { databases, storage, ID, InputFile } from "@/appwrite";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      throw new Error("No file uploaded or the file could not be processed.");
    }

    const buffer = await file.arrayBuffer(); 
    const nodeBuffer = Buffer.from(buffer);

    const result = await storage.createFile(
      "pdf_storage",
      ID.unique(),
      InputFile.fromBuffer(nodeBuffer, file["name"])
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error storing document:", error);
    return NextResponse.json(
      { error: "Failed to store document" },
      { status: 500 }
    );
  }
}
