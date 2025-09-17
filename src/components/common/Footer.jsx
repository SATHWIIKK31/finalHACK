// src/components/common/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full p-4 text-center text-sm" style={{ backgroundColor: 'var(--green)', color: 'var(--white)' }}>
      &copy; {new Date().getFullYear()} INDIAN CULTURAL AND HERITAGE EXPLORER
    </footer>
  );
};

export default Footer;