import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import WorkExperiences from "./components/WorkExperiences";
import { Skills } from "./components/SkillsSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <Skills />
          <AboutSection/>
          <ProjectsSection/>
          {/* <WorkExperiences/> */}
          <EmailSection/>
        </div>
        <Footer/>
      </main>
  )
}
