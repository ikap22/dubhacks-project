"use client"; // This indicates it's a Client Component

import { supabase } from "@/utils/supabaseConfig"; // Adjust the path based on your structure
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Layers, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Board() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [boards, setBoards] = useState<any[]>([]);
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
    <div>
      <div className="justify-center">
        <h1 className="text-3xl font-semibold mt-4 text-center">Active Projects</h1>
      </div>
      <ul>
        {boards.map((board) => (
          <li
            key={board.id}
            className="mr-10 mb-10 mt-10 border-2 rounded-md p-6"
          >
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Layers className="h-6 w-6 text-primary" />
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
                    {board.posts.length === 0 ? (
                      <p className="text-muted-foreground">
                        No posts available for this board.
                      </p>
                    ) : (
                      board.posts.map(
                        (post: {
                          id: number;
                          title: string;
                          content: string;
                          created_at: string;
                        }) => (
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
                                <ChevronRight className="h-4 w-4 ml-1" />
                              </span>
                            </div>
                          </div>
                        )
                      )
                    )}
                  </ScrollArea>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2">
                <Button
                  onClick={() => handleRequest(board.id)}
                  disabled={request[board.id]}
                >
                  Request to Join
                </Button>
                {request[board.id] && (
                  <div className="text-green-600">
                    Request sent to project owner!
                  </div>
                )}
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
