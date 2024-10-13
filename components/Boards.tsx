"use client"; // This indicates it's a Client Component

import { supabase } from "@/utils/supabaseConfig"; // Adjust the path based on your structure
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Folder, Calendar, ArrowRight } from "lucide-react";


export default function Board() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
  }

  interface Board {
    id: number;
    name: string;
    description: string;
    created_at: string;
    posts: Post[];
  }

  const [boards, setBoards] = useState<Board[]>([]);
  const [request, setRequest] = useState<{ [key: number]: boolean }>({});

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

  const handleRequest = (boardId: number) => {
    setRequest((prevRequest) => ({
      ...prevRequest,
      [boardId]: !prevRequest[boardId],
    }));
  };

  if (loading) return <div>Loading...</div>;
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">
        Project Boards
      </h1>
      {boards.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No boards available for this user.
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {boards.map((board) => (
            <Card
              key={board.id}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Folder className="h-6 w-6 text-primary" />
                  {board.name}
                </CardTitle>
                <CardDescription className="mt-2">
                  {board.description}
                </CardDescription>
                <Badge
                  variant="outline"
                  className="mt-4 flex items-center gap-1 w-fit"
                >
                  <Calendar className="h-3 w-3" />
                  Created: {new Date(board.created_at).toLocaleDateString()}
                </Badge>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-primary mb-2">
                    Recent Posts
                  </h3>
                  <ScrollArea className="h-[300px] pr-4">
                    {/* Use optional chaining and nullish coalescing */}
                    {(board.posts?.length ?? 0) === 0 ? (
                      <p className="text-muted-foreground">
                        No posts available for this board.
                      </p>
                    ) : (
                      board.posts?.map((post) => (
                        <div
                          key={post.id}
                          className="mb-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <h4 className="font-semibold text-primary mb-2">
                            {post.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {post.content}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <Badge
                              variant="secondary"
                              className="flex items-center gap-1"
                            >
                              <Calendar className="h-3 w-3" />
                              {new Date(post.created_at).toLocaleDateString()}
                            </Badge>
                            <span className="flex items-center hover:text-primary transition-colors cursor-pointer">
                              Read more
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </ScrollArea>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
