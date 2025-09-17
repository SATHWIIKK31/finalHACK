// src/components/home/MapMarker.jsx

import React from 'react';

const MapMarker = ({ x, y, site, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div
      className="absolute w-4 h-4 rounded-full transition-transform duration-200 ease-in-out hover:scale-125"
      style={{
        left: `${x / 10}%`,
        top: `${y / 10}%`,
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer',
        backgroundColor: 'var(--navy-blue)',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick} // The onClick event is now directly on the marker
      title={site.name}
    />
  );
};

export default MapMarker;