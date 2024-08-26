// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-secondary border-b border-border p-4 flex justify-between items-center">
      <h1 className="text-primary text-2xl font-bold">Shrinivas</h1>
      <nav>
        <a href="#about" className="text-text hover:text-primary mx-2">About</a>
        <a href="#experience" className="text-text hover:text-primary mx-2">Experience </a>
        <a href="#projects" className="text-text hover:text-primary mx-2">Projects</a>
        <a href="#contact" className="text-text hover:text-primary mx-2">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
