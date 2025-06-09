import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';

function App() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-300">
      <Navbar />
      <Hero />
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-5 right-10 bg-gray-300 dark:bg-gray-700 text-sm px-4 py-2 rounded shadow"
      >
        {darkMode ? '☀ Light ' : '🌙 Dark '}
      </button>
      <main className="pt-20">
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
}

export default App;
