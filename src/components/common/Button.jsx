// src/components/common/Button.jsx

import React from 'react';

const Button = ({ children, onClick, className = '', disabled = false }) => {
  const baseStyles = 'px-6 py-2 rounded-full font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const colorStyles = disabled ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-[var(--saffron)] text-[var(--white)] hover:bg-[var(--saffron-dark)]';

  return (
    <button
      className={`${baseStyles} ${colorStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;