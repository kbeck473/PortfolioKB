import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">kylebeck.dev</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a 
              href="https://github.com/kbeck473" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaGithub className="inline-block mr-1" size={20} />
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/kyle-beck-b09074334" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaLinkedin className="inline-block mr-1" size={20} />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
