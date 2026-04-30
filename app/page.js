import FlyerDesignSection from "./Cx/FlyerDesignSection";
import Footer from "./Cx/Footer";
import FutureSwimSection from "./Cx/FutureSwimSection";
import Hero from "./Cx/Hero";
import MindSection from "./Cx/MindSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero/>
      <MindSection/>
      <FlyerDesignSection title={"Power Up"} imageSrc={"/flyer.png"} imageAlt={"Old Vs New"} sectionId={"old-vs-new"} />
      <FutureSwimSection/>
      <Footer/>    
    </div>
  );
}
