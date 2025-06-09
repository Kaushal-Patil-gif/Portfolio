import React, { useState, useEffect, useContext } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../HeroBackground.css';
import { ThemeContext } from '../context/ThemeContext'; 

const circlesData = [
  { size: 'small', top: 10, left: 15, movementFactor: 10 },
  { size: 'medium', top: 30, left: 60, movementFactor: 15 },
  { size: 'large', top: 50, left: 25, movementFactor: 8 },
  { size: 'small', top: 70, left: 80, movementFactor: 12 },
  { size: 'medium', top: 85, left: 40, movementFactor: 10 },
];

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1; 
    const y = (e.clientY / window.innerHeight) * 2 - 1; 
    setMousePos({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4
        bg-gradient-to-b
        from-white via-gray-200 to-white
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        text-gray-900 dark:text-white
        transition-colors duration-700 overflow-hidden"
    >
      <div className="bokeh-bg">
        {circlesData.map(({ size, top, left, movementFactor }, i) => {
          const translateX = mousePos.x * movementFactor;
          const translateY = mousePos.y * movementFactor;

          return (
            <div
              key={i}
              className={`bokeh-circle ${size} ${darkMode ? 'dark' : 'light'}`}
              style={{
                top: `${top}%`,
                left: `${left}%`,
                transform: `translate(${translateX}px, ${translateY}px)`,
              }}
            />
          );
        })}
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-4 z-10">
        Hi, I’m Kaushal Patil
      </h1>

      <h2 className="text-xl md:text-2xl font-medium mb-6 z-10">
        I’m a{' '}
        <span className="text-blue-500 dark:text-blue-400 font-semibold">
          <Typewriter
            words={['Full-Stack Developer', 'React Enthusiast', 'AWS Cloud Practitioner', 'Problem Solver']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>

      <div className="flex gap-4 z-10">
        <a
          href="/Kaushal_Resume.pdf"
          download
          className="bg-blue-500 px-6 py-2 rounded text-white hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
        <a
          href="/Kaushal_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-500 px-6 py-2 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
