import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";
import { Menu, X, Book, PlusCircle, Library } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    {
      to: "/books",
      label: "All Books",
      icon: <Book size={20} className="mr-2" />,
    },
    {
      to: "/create-book",
      label: "Add Book",
      icon: <PlusCircle size={20} className="mr-2" />,
    },
    {
      to: "/borrow-summary",
      label: "Borrow Summary",
      icon: <Library size={20} className="mr-2" />,
    },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <NavLink
            to="/"
            className="text-white text-2xl font-bold tracking-tight md:text-3xl flex items-center hover:text-blue-200 transition-colors duration-300 "
          >
            <Library size={28} className="mr-2" />
            Library Management
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-white hover:text-blue-200 transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? "text-blue-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                      : ""
                  }`
                }
              >
                <Button
                  variant="ghost"
                  className="text-white hover:bg-gray-700/50 flex items-center rounded-lg px-3 py-1"
                >
                  {link.icon}
                  {link.label}
                </Button>
              </NavLink>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <button
              onClick={toggleMobileMenu}
              className="text-white ml-4 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block py-2 px-4 text-white hover:bg-gray-700/50 rounded transition-all duration-300 flex items-center ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 font-semibold"
                      : ""
                  }`
                }
                onClick={toggleMobileMenu}
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
