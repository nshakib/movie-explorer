import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
              🎬
            </span>
            <span className="text-xl font-bold text-white tracking-wide group-hover:text-primary transition-colors">
              TV Shows Hub
            </span>
          </Link>

          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-white hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/movies"
                className="text-gray-300 hover:text-white hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
              >
                Browse
              </Link>
            </li>
          </ul>

          <div className="hidden md:block">
            <Link
              to="/movies"
              className="bg-primary hover:bg-red-600 text-white px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 font-semibold text-sm"
            >
              Start Watching
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark border-t border-white/10 animate-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/movies"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Browse Shows
            </Link>
            <Link
              to="/movies"
              className="block w-full text-center mt-4 bg-primary text-white px-4 py-3 rounded-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              Start Watching
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
