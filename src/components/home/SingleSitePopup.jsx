// src/components/home/SingleSitePopup.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const SingleSitePopup = ({ site }) => {
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col items-center text-center"
      style={{ minWidth: '200px' }}
    >
      <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--navy-blue)' }}>
        {site.name}
      </h3>
      <p className="text-sm text-gray-600 mb-4">{site.description}</p>
      <Link to={`/sites/${site.id}`}>
        <Button className="text-sm">Learn More</Button>
      </Link>
    </div>
  );
};

export default SingleSitePopup;