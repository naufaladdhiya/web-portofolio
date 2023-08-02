import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Navigation from "./components/navigation/navigation.component";
import Home from "./pages/home.pages";
import Project from "./pages/project.pages";
import About from "./pages/about.pages";
import ExperiencePage from "./pages/experience.pages";
import NotFound from "./pages/notFound.pages";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
