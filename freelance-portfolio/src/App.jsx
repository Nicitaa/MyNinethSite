import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";
import ScrollToTop from "./utils/ScrollToTop.js";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
