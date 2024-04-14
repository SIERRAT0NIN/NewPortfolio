import { Route, Routes } from "react-router-dom";

import App from "../App";
import About from "./About/About";
import Work from "./Work/Work";
import Education from "./Education/Education";
import Project from "./Project/Project";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRouter;
