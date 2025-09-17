// src/components/site/ARModelViewer.jsx

import React from 'react';

const ARModelViewer = ({ model }) => {
  return (
    <div className="w-full h-full">
      <model-viewer
        src={model}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        touch-action="pan-y"
        loading="eager"
        className="w-full h-full rounded-lg shadow-lg"
      >
      </model-viewer>
    </div>
  );
};

export default ARModelViewer;