import { useEffect, useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  const ignoreScrollRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ignoreScrollRef.current) return; 

      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = activeLink;

      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.querySelector(links[i].href);
        if (section) {
          if (scrollPos >= section.offsetTop - 80) {
            current = links[i].href.slice(1);
            break;
          }
        }
      }
      setActiveLink(current);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeLink]);

  const handleClick = (href) => {
    const section = document.querySelector(href);
    if (section) {
      ignoreScrollRef.current = true; 
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(href.slice(1));

      setTimeout(() => {
        ignoreScrollRef.current = false;
      }, 700);
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-white-500 cursor-pointer select-none">
          Portfolio
        </div>

        <ul className="hidden md:flex gap-6 items-center">
          {links.map(({ name, href }) => (
            <li key={name}>
              <button
                onClick={() => handleClick(href)}
                className={`${
                  activeLink === href.slice(1)
                    ? 'text-blue-500 font-semibold'
                    : 'text-gray-700 dark:text-gray-300'
                } hover:text-blue-500 transition`}
              >
                {name}
              </button>
            </li>
          ))}

          <li>
            <a
              href="https://github.com/Kaushal-Patil-gif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 text-xl"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kaushalpatil3391/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 text-xl"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-2xl text-gray-700 dark:text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-3 shadow-md">
          {links.map(({ name, href }) => (
            <button
              key={name}
              onClick={() => handleClick(href)}
              className={`block w-full text-left ${
                activeLink === href.slice(1)
                  ? 'text-blue-500 font-semibold'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {name}
            </button>
          ))}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/Kaushal-Patil-gif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/kaushalpatil3391/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
