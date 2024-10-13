
import Hero from "@/components/hero";

import boards from "@/components/Boards";
import Board from "@/components/Boards";


export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        <Board/>
      </main>
    </>
  );
}
