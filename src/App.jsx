import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Design from "./components/design";
import CaseStudy from "./components/caseStudy";
import Experience from "./components/experience";
import Footer from "./components/Footer";
import Header from "./components/header";
import CtaBand from "./components/CtaBand";
import Home from "./components/Home";
import { keepTheme, setTheme } from "./components/mode";
import Navbar from "./components/Navbar";
import Projects from "./components/projects";
import "./views/App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    keepTheme();
    setIsDarkMode(localStorage.getItem("theme") === "theme-dark");
  }, []);

  const toggleTheme = () => {
    setTheme(isDarkMode ? "theme-light" : "theme-dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header isDarkMode={isDarkMode} />
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/design" element={<Design />} />
            <Route path="/design/:slug" element={<CaseStudy />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <CtaBand />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
