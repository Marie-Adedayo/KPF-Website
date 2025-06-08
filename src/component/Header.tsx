import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/KPF-Logo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Kayode Philip Foundation Logo" className="w-28 object-cover" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-purple-700 font-medium">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-purple-700 font-medium">About Us</Link>
            <Link to="/project" className="text-gray-800 hover:text-purple-700 font-medium">Projects</Link>
            <Link to="/news" className="text-gray-800 hover:text-purple-700 font-medium">News</Link>
            <Link to="/impact" className="text-gray-800 hover:text-purple-700 font-medium">Impact</Link>
            <a href="" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition font-medium">Donate</a>
          </nav>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
                <i className={`text-xl fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40">
            <div className="px-6 py-4 space-y-4">
              <Link to="/" onClick={toggleMobileMenu} className="block text-gray-800 hover:text-purple-700 hover:bg-purple-400 font-medium">Home</Link>
              <Link to="/about" onClick={toggleMobileMenu} className="block text-gray-800 hover:text-purple-700 font-medium">About Us</Link>
              <Link to="/projects" onClick={toggleMobileMenu} className="block text-gray-800 hover:text-purple-700 font-medium">Projects</Link>
              <Link to="/news" onClick={toggleMobileMenu} className="block text-gray-800 hover:text-purple-700 font-medium">News</Link>
              <Link to="/impact" onClick={toggleMobileMenu} className="block text-gray-800 hover:text-purple-700 font-medium">Impact</Link>
              <a href="#" className="block bg-orange-500 text-white text-center px-4 py-2 rounded hover:bg-orange-600 transition font-medium">Donate</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
