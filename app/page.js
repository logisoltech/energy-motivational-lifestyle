import FlyerDesignSection from "./Cx/FlyerDesignSection";
import Footer from "./Cx/Footer";
import FutureSwimSection from "./Cx/FutureSwimSection";
import Hero from "./Cx/Hero";
import MindSection from "./Cx/MindSection";
import Nav from "./Cx/Nav";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Nav />
      <FlyerDesignSection />
      {/* <MindSection /> */}
      <FutureSwimSection />
      <Hero />
      <Footer />
    </div>
  );
}
