import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

function Home() {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  // When scrollEnabled changes, toggle body overflow to enable/disable scroll
  useEffect(() => {
    if (scrollEnabled) {
      document.body.style.overflow = "auto"; // enable scrolling
    } else {
      document.body.style.overflow = "hidden"; // disable scrolling
      window.scrollTo(0, 0); // always scroll to top on disable
    }

    return () => {
      // Cleanup: restore scroll on unmount
      document.body.style.overflow = "auto";
    };
  }, [scrollEnabled]);

  // Handler to enable scroll and scroll to About
  const handleGetStarted = () => {
    setScrollEnabled(true);
    setTimeout(() => {
      const section = document.getElementById("about");
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100); // slight delay to allow scroll enabling
  };

  return (
    <div className="bg-[#143C2F] text-white">
      <Hero onGetStarted={handleGetStarted} />
      {scrollEnabled && (
        <>
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </>
      )}
    </div>
  );
}

export default Home;
