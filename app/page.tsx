export default async function Index() {
  return (
    <main className="text-[#4b2e83] space-y-6 select-none">
      <div className="overflow-hidden min-h-screen w-full grid place-content-center -mt-[10vh] bg-dot-8-s-2-neutral-950">
        <div className="bg-gray-100 space-y-6 p-12 text-center rounded-2xl drop-shadow-xl transition duration-700 hover:drop-shadow-2xl">
          <h1 className="text-5xl font-bold">Welcome to BoardWalk!</h1>
          <h2 className="text-3xl font-normal">
            Sign in to post or join an active project
          </h2>
        </div>
      </div>
    </main>
  );
}
