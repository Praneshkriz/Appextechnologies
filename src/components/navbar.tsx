import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'courses', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              <span className="text-[hsl(51,100%,50%)]">Appex</span> Technologies
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-all duration-300 relative ${
                activeSection === 'home' 
                  ? 'text-[hsl(51,100%,50%)] scale-105' 
                  : 'text-white hover:text-[hsl(51,100%,50%)]'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[hsl(51,100%,50%)] rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-all duration-300 relative ${
                activeSection === 'about' 
                  ? 'text-[hsl(51,100%,50%)] scale-105' 
                  : 'text-white hover:text-[hsl(51,100%,50%)]'
              }`}
            >
              About
              {activeSection === 'about' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[hsl(51,100%,50%)] rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className={`font-medium transition-all duration-300 relative ${
                activeSection === 'courses' 
                  ? 'text-[hsl(51,100%,50%)] scale-105' 
                  : 'text-white hover:text-[hsl(51,100%,50%)]'
              }`}
            >
              Courses
              {activeSection === 'courses' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[hsl(51,100%,50%)] rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium transition-all duration-300 relative ${
                activeSection === 'testimonials' 
                  ? 'text-[hsl(51,100%,50%)] scale-105' 
                  : 'text-white hover:text-[hsl(51,100%,50%)]'
              }`}
            >
              Testimonials
              {activeSection === 'testimonials' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[hsl(51,100%,50%)] rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-all duration-300 relative ${
                activeSection === 'contact' 
                  ? 'text-[hsl(51,100%,50%)] scale-105' 
                  : 'text-white hover:text-[hsl(51,100%,50%)]'
              }`}
            >
              Contact
              {activeSection === 'contact' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[hsl(51,100%,50%)] rounded-full"></div>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[hsl(51,100%,50%)]"
            >
              <i className="fas fa-bars text-xl"></i>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className={`block font-medium py-2 w-full text-left transition-all duration-300 relative ${
                  activeSection === 'home' 
                    ? 'text-[hsl(51,100%,50%)] bg-gray-900 px-4 rounded-lg' 
                    : 'text-white hover:text-[hsl(51,100%,50%)] px-4'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`block font-medium py-2 w-full text-left transition-all duration-300 relative ${
                  activeSection === 'about' 
                    ? 'text-[hsl(51,100%,50%)] bg-gray-900 px-4 rounded-lg' 
                    : 'text-white hover:text-[hsl(51,100%,50%)] px-4'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className={`block font-medium py-2 w-full text-left transition-all duration-300 relative ${
                  activeSection === 'courses' 
                    ? 'text-[hsl(51,100%,50%)] bg-gray-900 px-4 rounded-lg' 
                    : 'text-white hover:text-[hsl(51,100%,50%)] px-4'
                }`}
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className={`block font-medium py-2 w-full text-left transition-all duration-300 relative ${
                  activeSection === 'testimonials' 
                    ? 'text-[hsl(51,100%,50%)] bg-gray-900 px-4 rounded-lg' 
                    : 'text-white hover:text-[hsl(51,100%,50%)] px-4'
                }`}
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block font-medium py-2 w-full text-left transition-all duration-300 relative ${
                  activeSection === 'contact' 
                    ? 'text-[hsl(51,100%,50%)] bg-gray-900 px-4 rounded-lg' 
                    : 'text-white hover:text-[hsl(51,100%,50%)] px-4'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
