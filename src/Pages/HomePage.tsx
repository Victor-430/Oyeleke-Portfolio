import { Suspense } from "react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import DevelopmentApproach from "../components/DevelopmentApproach";
import Collaborations from "../components/Collaborations";
import Projects from "../components/Projects";
import SoftSkills from "../components/SoftSkills";
import About from "../components/About";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
            Loading...
          </div>
        }
      >
        <Hero />
        <TechStack />
        <DevelopmentApproach />
        <Collaborations />
        <Projects />
        <SoftSkills />
        <About />
        <Footer />
      </Suspense>
    </div>
  );
};

export default HomePage;
