import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 right-0 mt-4 ${isSticky ? 'bg-white shadow-sm' : ''}`}>
      <nav className="container py-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <ul className="d-none d-lg-flex list-unstyled">
              {navItems.map(({ link, path }) => (
                <li key={path} className="mx-3">
                  <Link
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className={`nav-link ${isSticky ? 'text-dark' : 'text-white'}`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-lg-none">
            <button
              onClick={toggleMenu}
              className={`btn ${isSticky ? 'btn-dark' : 'btn-light'} ${isMenuOpen ? 'd-none' : ''}`}
            >
              <FaBars />
            </button>
            <button
              onClick={toggleMenu}
              className={`btn ${isSticky ? 'btn-dark' : 'btn-light'} ${isMenuOpen ? '' : 'd-none'}`}
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className={`nav-link ${isSticky ? 'text-dark' : 'text-white'}`}
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
