// src/components/home/MapPopup.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const MapPopup = ({ sites }) => {
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-lg border border-gray-200"
      style={{ minWidth: '200px' }}
    >
      <div className="flex flex-col space-y-2">
        <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--navy-blue)' }}>
          Select a Site:
        </h3>
        {sites.map(site => (
          <Link
            key={site.id}
            to={`/sites/${site.id}`}
            className="flex items-center p-2 rounded-lg hover:bg-gray-100"
          >
            <div className="w-16 h-12 bg-gray-300 rounded mr-4">
              {/* Placeholder for site thumbnail image */}
            </div>
            <div className="text-sm font-medium text-gray-800">
              {site.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MapPopup;