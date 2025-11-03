import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-gray-100">
      <nav className="w-full px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="flex items-center space-x-2 hover:opacity-80">
          <img 
            src="/images/home/Spartans_logo.webp" 
            alt="Spartans FC Logo" 
            className="h-10 w-auto"
          />
          <span className="font-bold text-lg">SPARTANS FC</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <button onClick={() => onNavigate('home')} className="text-black font-medium hover:text-gray-600">Home</button>
          <button onClick={() => onNavigate('national-championship')} className="text-gray-600 hover:text-black">National Championship</button>
          <button onClick={() => onNavigate('youth-academy')} className="text-gray-600 hover:text-black">Youth Academy</button>
          <button onClick={() => onNavigate('media')} className="text-gray-600 hover:text-black">Media</button>
          <button onClick={() => onNavigate('about')} className="text-gray-600 hover:text-black">About Us</button>
          <button onClick={() => onNavigate('sponsor')} className="text-gray-600 hover:text-black">Sponsor</button>
          <div className="relative" ref={moreRef}>
            <button 
              onClick={(e) => {
                e.preventDefault();
                setIsMoreOpen(!isMoreOpen);
              }} 
              className="flex items-center text-gray-600 hover:text-black"
            >
              More
              {isMoreOpen ? (
                <ChevronUp className="ml-1 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-1 h-4 w-4" />
              )}
            </button>
            <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${isMoreOpen ? 'block' : 'hidden'}`}>
              <button 
                onClick={() => {
                  onNavigate('contact');
                  setIsMoreOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Contact Us
              </button>
              <button 
                onClick={() => {
                  onNavigate('placements');
                  setIsMoreOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Placements
              </button>
              <button 
                onClick={() => {
                  onNavigate('usys-e64');
                  setIsMoreOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                USYS E64
              </button>
            </div>
          </div>
        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4">
          <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="block w-full text-left text-black font-medium">Home</button>
          <button onClick={() => { onNavigate('national-championship'); setIsOpen(false); }} className="block w-full text-left text-gray-600">National Championship</button>
          <button onClick={() => { onNavigate('youth-academy'); setIsOpen(false); }} className="block w-full text-left text-gray-600">Youth Academy</button>
          <button onClick={() => { onNavigate('media'); setIsOpen(false); }} className="block w-full text-left text-gray-600">Media</button>
          <button onClick={() => { onNavigate('about'); setIsOpen(false); }} className="block w-full text-left text-gray-600">About Us</button>
          <button onClick={() => { onNavigate('sponsor'); setIsOpen(false); }} className="block w-full text-left text-gray-600">Sponsor</button>
          <div className="border-t border-gray-100 pt-2 mt-2">
            <button 
              onClick={() => { onNavigate('contact'); setIsOpen(false); }} 
              className="block w-full text-left text-gray-600 py-2"
            >
              Contact Us
            </button>
            <button 
              onClick={() => { onNavigate('placements'); setIsOpen(false); }} 
              className="block w-full text-left text-gray-600 py-2"
            >
              Placements
            </button>
            <button 
              onClick={() => { onNavigate('usys-e64'); setIsOpen(false); }} 
              className="block w-full text-left text-gray-600 py-2"
            >
              USYS E64
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
