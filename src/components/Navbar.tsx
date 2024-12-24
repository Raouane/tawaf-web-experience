import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl font-bold text-primary dark:text-mauve">TAWAF</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hajj" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-mauve transition-colors">Hajj</a>
            <a href="#omra" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-mauve transition-colors">Omra</a>
            <a href="#about" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-mauve transition-colors">À propos</a>
            <a href="#contact" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-mauve transition-colors">Contact</a>
            <a href="/account" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-mauve transition-colors">Mon compte</a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary dark:text-mauve"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white dark:bg-gray-900">
            <div className="flex flex-col space-y-4">
              <a href="#hajj" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-mauve transition-colors">Hajj</a>
              <a href="#omra" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-mauve transition-colors">Omra</a>
              <a href="#about" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-mauve transition-colors">À propos</a>
              <a href="#contact" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-mauve transition-colors">Contact</a>
              <a href="/account" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-mauve transition-colors">Mon compte</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};