"use client"; // This indicates it's a Client Component

import { supabase } from "@/utils/supabaseConfig"; // Adjust the path based on your structure
import { useEffect, useState } from "react";

export default function Board() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [boards, setBoards] = useState<any[]>([]);

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
    <div>
      <h1 className="text-3xl font-semibold mt-4"> Active Projects</h1>
      <ul>
        {boards.map((board) => (
          <li key={board.id} className="mr-10 mb-10 mt-10 border-2 rounded-md p-6">
            <h2 className="font-bold text-3xl">{board.name}</h2>
            <p>{board.description}</p>
            <small>
              Created at: {new Date(board.created_at).toLocaleString()}
            </small>
            <h3 className="font-semibold underline text-2xl mb-2 mt-2">What&apos;s going on with this project?</h3>
            <ul>
              {console.log(board.posts)}
              {board.posts.length > 0 ? (
                board.posts.map((post: any) => (
                  <li key={post.id}>
                    <strong className="italic text-xl">{post.title}</strong>
                    <p>{post.content}</p>
                    <div>
                      Posted on: {new Date(post.created_at).toLocaleString()}
                    </div>
                  </li>
                ))
              ) : (
                <li>No posts available for this board</li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
