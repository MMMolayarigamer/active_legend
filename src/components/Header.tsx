import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-darker shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-dark-darker font-bold text-xl">AL</span>
          </div>
          <span className="mr-3 text-xl font-bold">اکتیو لجندز</span>
        </a>

        <nav className={`hidden md:block ${isOpen ? 'block' : ''}`}>
          <ul className="flex space-x-8">
            <li><a href="#" className="nav-link active">خانه</a></li>
            <li><a href="#about" className="nav-link">درباره بازی</a></li>
            <li><a href="#features" className="nav-link">ویژگی‌ها</a></li>
            <li><a href="#gallery" className="nav-link">گالری</a></li>
            <li><a href="#contact" className="nav-link">تماس با ما</a></li>
          </ul>
        </nav>

        <div className="flex items-center">
          <a href="#" className="btn btn-primary hidden md:flex">
            دانلود بازی
            <Gamepad2 className="mr-2 h-5 w-5" />
          </a>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-dark-darker z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="container p-6">
            <div className="flex justify-end">
              <button onClick={toggleMenu}>
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col space-y-6 mt-10">
              <li><a href="#" className="nav-link active" onClick={toggleMenu}>خانه</a></li>
              <li><a href="#about" className="nav-link" onClick={toggleMenu}>درباره بازی</a></li>
              <li><a href="#features" className="nav-link" onClick={toggleMenu}>ویژگی‌ها</a></li>
              <li><a href="#gallery" className="nav-link" onClick={toggleMenu}>گالری</a></li>
              <li><a href="#contact" className="nav-link" onClick={toggleMenu}>تماس با ما</a></li>
            </ul>
            <div className="mt-8">
              <a href="#" className="btn btn-primary w-full flex justify-center items-center">
                دانلود بازی
                <Gamepad2 className="mr-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;