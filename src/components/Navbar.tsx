
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [session, setSession] = useState<{isLoggedIn: boolean, name?: string} | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const local = localStorage.getItem("cloudscape_user");
    setSession(local ? JSON.parse(local) : null);
  }, [location]);

  const handleLogout = () => {
    // Clear the session
    localStorage.removeItem("cloudscape_user");
    setSession(null);
    navigate("/");
  };

  const isLoggedIn = session?.isLoggedIn;
  const userName = session?.name;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold gradient-text">Cloudscape</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <a href="#hosting" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Hosting
              </a>
              <a href="#features" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Features
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
          <div className="hidden sm:flex items-center">
            {isLoggedIn ? (
              <>
                <span className="text-gray-600 mr-3">Welcome, {userName || 'User'}</span>
                <Link to="/profile">
                  <Button 
                    variant="ghost" 
                    className="text-gray-500 hover:text-gray-700 flex items-center"
                  >
                    <User size={18} className="mr-1" /> Profile
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="text-gray-500 hover:text-red-600 ml-2"
                  onClick={handleLogout}
                >
                  <LogOut size={18} className="mr-1" /> Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-gray-500 hover:text-gray-700">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-brand-blue to-brand-teal text-white ml-4 font-semibold shadow-md px-6 py-2">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="bg-gray-50 border-brand-blue text-brand-blue block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Home
            </Link>
            <a href="#hosting" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Hosting
            </a>
            <a href="#features" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Features
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              About
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Contact
            </a>
            <div className="mt-4 flex flex-col space-y-2 px-3">
              {isLoggedIn ? (
                <>
                  <Link to="/profile">
                    <Button variant="outline" className="w-full flex items-center">
                      <User size={18} className="mr-1" /> Profile
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full text-red-600"
                    onClick={handleLogout}
                  >
                    <LogOut size={18} className="mr-1" /> Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-teal text-white font-semibold shadow-md px-6 py-2">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
