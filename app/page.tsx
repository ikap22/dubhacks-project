import Link from "next/link";
import { Link as LucideLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function Index() {

  return (
    <main className="flex flex-col items-center justify-center h-screen text-[#4b2e83] text-4xl font-bold -mt-16 space-y-4">
      <div>Welcome to BoardWalk!</div>
      <div className="text-2xl font-normal text-[#4b2e83]">
        Sign in to post or join an active project
      </div>
      <div>
      </div>
    </main>
  );
}
