"use client";

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
    <div>
      {boards.length === 0 && <p>No boards available for this user.</p>}
      {boards.map((board) => (
        <div key={board.id} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{board.name}</h2>
          <p className="text-gray-600 mb-4">{board.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {board.posts.length === 0 ? (
              <p>No posts available for this board.</p>
            ) : (
              board.posts.map((post) => (
                <div
                  key={post.id}
                  className="border rounded-lg p-4 shadow-md bg-white"
                >
                  <h3 className="font-bold text-xl">{post.title}</h3>
                  <p className="text-gray-700 mb-2">{post.content}</p>
                  <small className="text-gray-500">
                    Posted on: {new Date(post.created_at).toLocaleDateString()}
                  </small>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
