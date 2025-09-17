// src/components/site/StreetViewViewer.jsx

import React from 'react';

const StreetViewViewer = ({ streetViewUrl }) => {
  return (
    <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        src={streetViewUrl}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default StreetViewViewer;