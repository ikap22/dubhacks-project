import React from "react";
import Link from "next/link";
import { supabase } from "@/utils/supabaseConfig";
import { redirect } from "next/navigation";

export default async function NavBar() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="bg-[#32006e] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          BoardWalk
        </Link>
        {!user && (
          <div className="flex space-x-4">
            <Link
              href="/sign-in"
              className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
