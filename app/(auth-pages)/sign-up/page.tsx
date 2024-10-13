import React from "react";
import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default function Signup({ searchParams }: { searchParams: Message }) {
  if ("message" in searchParams) {
    return (
      <div className="h-full w-full flex-1 flex items-center sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="h-full w-full grid place-content-center bg-neutral-100">
      <div className="bg-neutral-200/10 rounded-xl border-2 border-neutral-200/50 shadow-lg ">
        <form className="flex flex-col min-w-64 max-w-64 mx-auto my-8">
          <h1 className="text-2xl font-medium text-[#32006e]">Sign up</h1>
          <p className="text-sm text text-foreground">
            Already have an account?{" "}
            <Link
              className="text-primary font-medium underline"
              href="/sign-in"
            >
              Sign in
            </Link>
          </p>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label className="text-[#b7a57a]" htmlFor="email">
              Email
            </Label>
            <Input name="email" placeholder="you@example.com" required />

            <Label className="text-[#b7a57a]" htmlFor="first_name">
              First Name
            </Label>

            <Input
              className="text-[#b7a57a]"
              name="first_name"
              placeholder="Your first name"
              required
            />

            <Label className="text-[#b7a57a]" htmlFor="last_name">
              Last Name
            </Label>
            <Input name="last_name" placeholder="Your last name" required />

            <Label className="text-[#b7a57a]" htmlFor="password">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              minLength={6}
              required
            />
            <SubmitButton
              className="bg-[#32006e]"
              formAction={signUpAction}
              pendingText="Signing up..."
            >
              Sign up
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
        <SmtpMessage />
      </div>
    </div>
  );
}
