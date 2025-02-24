import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import OurService from "@/components/section/our-service";
import Jumbotron from "@/components/ui/jumbotron";

export default function Home() {
  return (
    <>
      <div className="min-h-screen max-w-screen-2xl mx-auto relative">
        <Navbar />
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Jumbotron />
          <OurService />
        </main>
      </div>
      <Footer />
    </>
  );
}
