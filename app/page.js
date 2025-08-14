import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import News from "@/components/News";

export default function Home() {
 
  return (
    <div className="min-h-screen flex flex-col bg-color1">
      <Hero />
      <Categories />
      <News />
      <Footer />
    </div>
  );
}
