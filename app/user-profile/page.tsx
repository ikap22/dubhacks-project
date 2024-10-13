import React from "react";
import { supabase } from "@/utils/supabaseConfig";
import { redirect } from "next/navigation";
import UserProjectBoards from "@/components/UserProjects";

export default async function page() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="h-full w-full">
      <UserProjectBoards/>

      <section>
        <div className="flex justify-between">
          <p className="text-2xl font-bold">Projects You've Joined</p>
        </div>

        <div className="flex justify-between">
          <div className="h-[20vh] w-1/5 bg-gray-300 rounded-xl" />
          <div className="h-[20vh] w-1/5 bg-gray-300 rounded-xl" />
          <div className="h-[20vh] w-1/5 bg-gray-300 rounded-xl" />
          <div className="h-[20vh] w-1/5 bg-gray-300 rounded-xl" />
        </div>
      </section>
    </div>
  );
}
