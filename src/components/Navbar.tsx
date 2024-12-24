import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl font-bold text-primary">TAWAF</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#hajj" className="text-gray-600 hover:text-primary transition-colors">Hajj</a>
            <a href="#omra" className="text-gray-600 hover:text-primary transition-colors">Omra</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">À propos</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            <a href="/account" className="text-gray-600 hover:text-primary transition-colors">Mon compte</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6 text-primary" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#hajj" className="text-gray-600 hover:text-primary transition-colors">Hajj</a>
              <a href="#omra" className="text-gray-600 hover:text-primary transition-colors">Omra</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">À propos</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
              <a href="/account" className="text-gray-600 hover:text-primary transition-colors">Mon compte</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};