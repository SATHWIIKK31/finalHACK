// src/components/site/SitePage.jsx

import React, { useState } from 'react';
import { useARCompatibility } from '../../hooks/useARCompatibility';
import AudioPlayer from './AudioPlayer';
import Button from '../common/Button';
import ARModelViewer from './ARModelViewer';
import StreetViewViewer from './StreetViewViewer'; // Import the new component
import ContentSection from './ContentSection';

const SitePage = ({ site }) => {
  const { isSupported, isLoading } = useARCompatibility();
  const [viewMode, setViewMode] = useState('model'); // 'model' or 'street-view'

  const handleARClick = () => {
    setViewMode('model');
  };

  const handleStreetViewClick = () => {
    setViewMode('street-view');
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--navy-blue)' }}>
            {site.name}
          </h1>
          <p className="text-lg mt-4 text-gray-700">{site.description}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {isLoading ? (
              <Button disabled>Checking AR...</Button>
            ) : isSupported ? (
              <Button onClick={handleARClick}>Start AR Tour</Button>
            ) : (
              <Button disabled>AR is not supported</Button>
            )}
            <Button onClick={handleStreetViewClick} className="bg-gray-500 hover:bg-gray-700 text-white">
              View Street View
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src={site.images[0]?.src} alt={site.images[0]?.alt} className="rounded-lg shadow-lg w-full" />
        </div>
      </div>

      {/* Audio Player Section */}
      <AudioPlayer audio={site.audio} />

      {/* Main content viewer */}
      <div className="mt-12 w-full h-96">
        {viewMode === 'model' ? (
          <ARModelViewer model={site.model} />
        ) : (
          <StreetViewViewer streetViewUrl={site.streetViewUrl} />
        )}
      </div>

      {/* Content Sections */}
      {site.images.slice(1).map((image, index) => (
        <ContentSection
          key={index}
          image={image}
          // We will pass narrative text here, once we add it to sites.js
        />
      ))}
    </div>
  );
};

export default SitePage;