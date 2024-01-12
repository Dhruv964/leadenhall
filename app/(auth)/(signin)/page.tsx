import { Metadata } from "next";
import Link from "next/link";
import UserAuthForm from "@/components/forms/user-auth-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/public/blozum.svg";
export const metadata: Metadata = {
  title: "Blozum AI",
  description: "Authentication Page",
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 hidden top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link
            href={"https://blozum.com"}
            target="_blank"
            className="flex items-center"
          >
            <Image src={Logo} alt="" height={40} width={40} />
            <span className="lex font-bold dark:text-white md:text-xl ml-2 rtl:ml-0 rtl:mr-2 self-center text-2xl whitespace-nowrap">
              Blozum
            </span>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Experience the future of customer engagement with Blozum AI
              - our innovative assistant powered by generative AI. We create
              human-like conversations that connect, assist, and drive
              conversions. Elevate your business with personalized interactions
              that turn visitors into loyal buyers.&rdquo;
            </p>
            <footer className="text-sm">Blozum AI</footer>
          </blockquote>
        </div>
      </div>
      <div className="p-4 lg:p-8 h-full flex items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login with Google
            </h1>
            {/* <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p> */}
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
