import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Eventure</div>
        <ul className="flex space-x-6 text-gray-600">
          <li>
            <Link href="/" className="hover:text-blue-600 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-blue-600 transition duration-300">
              Events
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
