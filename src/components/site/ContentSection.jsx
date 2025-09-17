// src/components/site/ContentSection.jsx

import React from 'react';

const ContentSection = ({ image, title, text }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between my-12">
      <div className="md:w-1/2">
        {/* Placeholder for lazy-loaded image */}
        <img src={image?.src} alt={image?.alt} className="rounded-lg shadow-lg w-full" />
      </div>
      <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
        <h2 className="text-3xl font-bold" style={{ color: 'var(--navy-blue)' }}>
          {title}
        </h2>
        <p className="mt-4 text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default ContentSection;