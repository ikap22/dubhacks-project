"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Layers, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const boards = [
  {
    id: "1c8f84d7-2b54-4a29-8f42-38bcefe7eac1",
    name: "Project Delta",
    description: "A project focused on improving mobile user experience.",
    created_at: "2024-10-13T00:00:00.000Z",
    posts: [
      {
        id: "18cf9431-3e6d-4c2f-bbb6-6fd9bafc3764",
        title: "Implementing Responsive UI",
        content:
          "We have successfully redesigned the user interface to be fully responsive across devices.",
        created_at: "2024-10-13T00:00:00.000Z",
      },
      {
        id: "28cf9431-4e6d-4d2f-bbb6-6fd9bafc3765",
        title: "Optimizing Load Time",
        content:
          "Optimization techniques have reduced load times by 40% on mobile devices.",
        created_at: "2024-10-13T00:00:00.000Z",
      },
      {
        id: "38cf9431-5e6d-4f2f-bbb6-6fd9bafc3766",
        title: "Enhancing User Experience",
        content:
          "We have introduced new UX features like swipe navigation and intuitive menu layouts.",
        created_at: "2024-10-13T00:00:00.000Z",
      },
    ],
  },
  {
    id: "6a51282d-4a58-4fd5-b214-dcfebf176c89",
    name: "Project Epsilon",
    description: "A cloud infrastructure optimization project.",
    created_at: "2024-10-13T00:00:00.000Z",
    posts: [
      {
        id: "78cf9431-9e6d-4j2f-bbb6-6fd9bafc376a",
        title: "Reducing Cloud Costs",
        content:
          "We have cut cloud operational costs by 30% using automated resource management.",
        created_at: "2024-10-13T00:00:00.000Z",
      },
      {
        id: "88cf9431-ae6d-4k2f-bbb6-6fd9bafc376b",
        title: "Implementing CI/CD Pipelines",
        content:
          "Continuous integration and deployment pipelines have been successfully integrated.",
        created_at: "2024-10-13T00:00:00.000Z",
      },
      {
        id: "98cf9431-be6d-4l2f-bbb6-6fd9bafc376c",
        title: "Auto-scaling Setup",
        content:
          "We have configured auto-scaling for efficient cloud infrastructure management.",
        created_at: "2024-10-13T00:00:00.000Z",
      },
    ],
  },
  {
    id: "79b3574b-bdf2-43a2-92a3-65be45973d34",
    name: "Project Zeta",
    description: "A web application for event management.",
    created_at: "2024-10-13T00:00:00.000Z",
    posts: [
      {
        id: "a8cf9431-ce6d-4m2f-bbb6-6fd9bafc376d",
        title: "Adding Event Management Feature",
        content:
          "A new event management feature has been added to simplify event organization.",
        created_at: "2024-10-13T00:00:00.000Z",
      },
      {
        id: "b8cf9431-de6d-4n2f-bbb6-6fd9bafc376e",
        title: "User Registration Module",
        content:
          "The user registration module is live, enabling seamless onboarding for new users.",
        created_at: "2024-10-13T00:00:00.000Z",
      },
      {
        id: "c8cf9431-ee6d-4o2f-bbb6-6fd9bafc376f",
        title: "Integrating Payment Gateway",
        content:
          "We have successfully integrated the payment gateway to handle transactions.",
        created_at: "2024-10-13T00:00:00.000Z",
      },
    ],
  },
];

export default function BoardsWithPosts() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">
        Your Active Project Boards 
      </h1>
      {boards.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No boards available for this user.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {boards.map((board) => (
            <Card
              key={board.id}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Layers className="h-6 w-6 text-primary" />
                  {board.name}
                </CardTitle>
                <CardDescription>{board.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 pb-4">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    Recent Posts
                  </h3>
                  <ScrollArea className="h-[300px] pr-4">
                    {board.posts.length === 0 ? (
                      <p className="text-muted-foreground">
                        No posts available for this board.
                      </p>
                    ) : (
                      board.posts.map((post) => (
                        <div
                          key={post.id}
                          className="mb-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <h4 className="font-semibold text-primary mb-1">
                            {post.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {post.content}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <Badge
                              variant="outline"
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
