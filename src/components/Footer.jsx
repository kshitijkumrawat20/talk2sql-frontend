import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Talk2SQL. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="mailto:kshitijk146@gmail.com"
              className="flex items-center hover:text-white transition-colors duration-300"
              aria-label="Contact via Email"
            >
              <FaEnvelope className="mr-2" />
              <span>kshitijk146@gmail.com</span>
            </a>
            
            <a
              href="https://github.com/kshitijk20/Talk2SQL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors duration-300"
              aria-label="View GitHub Repository"
            >
              <FaGithub className="mr-2" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;