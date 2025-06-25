import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects"; // This includes <ProjectsSection />
import Contact from "./pages/Contact";

// About Subpages
import History from "./pages/About/History";
import Mission from "./pages/About/Mission";
import Staff from "./pages/About/Team/Staff";
import Board from "./pages/About/Team/Board";
import Partners from "./pages/About/Partners";
import Sustainability from "./pages/About/Sustainability";
import Media from "./pages/About/Media";
import Impact from "./pages/About/Impact";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-primary text-heading">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/team/staff" element={<Staff />} />
          <Route path="/about/team/board" element={<Board />} />
          <Route path="/about/partners" element={<Partners />} />
          <Route path="/about/sustainability" element={<Sustainability />} />
          <Route path="/about/media" element={<Media />} />
          <Route path="/about/impact" element={<Impact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
