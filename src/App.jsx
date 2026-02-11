import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  }, [])

  useEffect(() => {
    if (window.location.hash !== '#home') {
      window.history.replaceState(null, '', '#home');
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    AOS.refresh()
  }, [darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className= {
      darkMode 
      ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen" 
      : 'bg-linear-to-br from-gray-50 min-h-screen'
    }>
      <Navbar darkMode= {darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />

    </div>
  );
};

export default App;