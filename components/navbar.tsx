import React from "react";
import Link from "next/link";
import { supabase } from "@/utils/supabaseConfig";
import NavButton from "./nav-button";

export default async function NavBar() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="z-[5] relative h-[10vh] bg-[#32006e] flex items-center">
      <div
        className={`container mx-auto flex ${user ? "" : "justify-between"} items-center`}
      >
        <Link href="/" className="text-neutral-100 text-4xl font-semibold">
          BoardWalk
        </Link>

        {!user && (
          <div className="flex space-x-4">
            <NavButton
              content={"Sign In"}
              href={"/sign-in"}
              className={
                "bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
              }
            />
            <NavButton
              content={"Sign Up"}
              href={"/sign-up"}
              className={
                "bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
              }
            />
          </div>
        )}

        {user && (
          <div className="flex space-x-4 ml-4">
            <NavButton
              content={"User Profile"}
              href={"/user-profile"}
              className={
                "bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
              }
            />
            <NavButton
              content={"Boards"}
              href={"boards"}
              className={
                "bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
              }
            />
          </div>
        )}
      </div>
    </nav>
  );
}
