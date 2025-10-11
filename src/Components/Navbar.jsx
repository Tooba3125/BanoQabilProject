import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide hover:text-yellow-300"
        >
          Educators<span className="text-yellow-300">Academy</span>
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex md:space-x-6 font-semibold text-lg ${
            isOpen
              ? "block bg-blue-700 mt-4 py-3 px-4 rounded-lg"
              : "hidden md:block"
          }`}
        >
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
          <li><Link to="/courses" className="hover:text-yellow-300">Courses</Link></li>
          <li><Link to="/teachers" className="hover:text-yellow-300">Teachers</Link></li>
          <li><Link to="/gallery" className="hover:text-yellow-300">Gallery</Link></li>
          <li><Link to="/events" className="hover:text-yellow-300">Events</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          <li>
            <Link
              to="/enroll"
              className="bg-yellow-400 text-blue-800 px-3 py-1 rounded-md hover:bg-yellow-300"
            >
              Enroll Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
