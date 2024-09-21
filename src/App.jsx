import React, { useState, useEffect } from "react";
import "./views/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { keepTheme, setTheme } from "./components/mode";
import Toggle from "./components/toggle";
import Home from "./components/Home";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Navbar from "./components/Navbar";
import Contact from "./components/contact";
import AboutMe from "./components/aboutMe";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    keepTheme();
    const currentTheme = localStorage.getItem("theme");
    setIsDarkMode(currentTheme === "theme-dark");
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setTheme("theme-light");
    } else {
      setTheme("theme-dark");
    }
    setIsDarkMode(!isDarkMode);
  };
  const themeClass = isDarkMode ? "dark-theme" : "light-theme";

  return (
    <Router>
      <div className={`App ${themeClass}`}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Toggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <Navbar themeClass={themeClass} />
        <Routes>
          <Route
            path="/"
            element={<Home isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/contact"
            element={
              <Contact isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
        <Route
            path="/experience"
            element={
              <Experience isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/aboutme"
            element={
              <AboutMe isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
