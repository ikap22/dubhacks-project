"use client"
import Board from "@/components/Boards";
import React from 'react'
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabaseConfig";
import { redirect } from "next/navigation";

export default async function page() {
  const [boards, setBoards] = useState<any[]>([]);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBoardsWithPosts = async () => {
      setLoading(true);

      const { data, error } = await supabase.from("boards").select(`
          id,
          name,
          description,
          created_at,
          posts (
            id,
            title,
            content,
            created_at
          )
        `);

      if (error) {
        console.error("Error fetching data:", error.message);
        setError(error.message);
      } else {
        setBoards(data || []); // Set boards data
      }

      setLoading(false);
    };

    fetchBoardsWithPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <div className="h-full w-full">
      <Board boards={boards}/>
      {/* <section className='pt-2 pb-8'>
        <div className='flex justify-between pb-2'>
          <p className='text-2xl font-bold'>Catalog</p>
          <p className='text-xl'>Post a project</p>
        </div>

        <div className='flex justify-between'>
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
        </div>
      </section>

      <section>
        <div className='flex justify-between'>
          <p className='text-2xl font-bold'>Join a project</p>
          <p className='text-xl'>Request to join</p>
        </div>

        <div className='flex justify-between'>
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
        </div>
      </section> */}
    </div>
  );
}
