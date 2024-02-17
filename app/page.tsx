import { About, Catalogue, Contact, Hero } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      {/* <About /> */}
      <Catalogue />
      <Contact />
    </main>
  );
}
