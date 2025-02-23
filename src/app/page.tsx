import Navbar from "@/components/layout/navbar";
import Jumbotron from "@/components/ui/jumbotron";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto relative">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Jumbotron />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
