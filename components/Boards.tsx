"use client"; // This indicates it's a Client Component

import { supabase } from "@/utils/supabaseConfig"; // Adjust the path based on your structure
import { useEffect, useState } from "react";

export default function Board({ boards }: any) {
  const [loading, setLoading] = useState(true);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Boards with Posts:</h1>
      <ul>
        {boards.map((board : any) => (
          <li key={board.id}>
            <h2 className="font-bold">{board.name}</h2>
            <p>{board.description}</p>
            <small>
              Created at: {new Date(board.created_at).toLocaleString()}
            </small>
            <h3>Posts:</h3>
            <ul>
              {console.log(board.posts)}
              {board.posts.length > 0 ? (
                board.posts.map((post: any) => (
                  <li key={post.id}>
                    <strong>{post.title}</strong>
                    <p>{post.content}</p>
                    <small>
                      Posted on: {new Date(post.created_at).toLocaleString()}
                    </small>
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
