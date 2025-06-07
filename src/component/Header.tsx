import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-purple-700">
              <span className="text-orange-500">Kayode</span> Philip Foundation
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer">Home</a>
            <a
              href="https://readdy.ai/home/c23ea3ce-3d5b-4114-80f9-5b95c12ad4aa/c406457b-dec5-4f86-9dba-711b93911c5d"
              data-readdy="true"
              className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer"
            >
              About Us
            </a>
            <a href="#" className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer">Projects</a>
            <a href="#" className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer">News</a>
            <a href="#" className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer">Impact</a>
            <a
              href="#"
              className="bg-orange-500 text-white px-4 py-2 rounded-button hover:bg-orange-600 transition duration-300 font-medium cursor-pointer whitespace-nowrap"
            >
              Donate
            </a>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-800 focus:outline-none cursor-pointer whitespace-nowrap !rounded-button">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
