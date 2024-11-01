import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto w-full">
      <div className="max-w-screen-xl mx-auto px-6">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} EventFinder. All rights reserved.
        </p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
