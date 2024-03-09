/* eslint-disable import/no-anonymous-default-export */
//@ts-nocheck
import { databases } from "@/appwrite";
import { NextRequest, NextResponse } from "next/server";
import { mailOptions, transporter } from "@/lib/mail";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { to, name, subject, body } = await request.json();
  if (!name || !to || !subject || !body) {
    return NextResponse.json({ status: 400, message: "Bad request" });
  }

  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: to,
      subject: subject,
      name: name,
      html: body,
    });
    return NextResponse.json({
      status: 200,
      message: "success in sending mail",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 400, message: err.message });
  }
}
