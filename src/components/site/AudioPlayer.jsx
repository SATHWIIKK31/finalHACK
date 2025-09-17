// src/components/site/AudioPlayer.jsx

import React, { useState, useRef } from 'react';
import Button from '../common/Button';

const AudioPlayer = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [currentLang, setCurrentLang] = useState('en');

  const handlePlayPause = () => {
    const audioEl = audioRef.current;
    if (isPlaying) {
      audioEl.pause();
    } else {
      audioEl.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg flex items-center justify-between">
      <audio ref={audioRef} src={audio[currentLang]} onEnded={() => setIsPlaying(false)} />
      <div className="flex items-center space-x-4">
        <Button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <div className="text-sm font-medium text-gray-700">
          Now playing: {currentLang.toUpperCase()} Tour
        </div>
      </div>
      <div className="flex space-x-2">
        <Button onClick={() => setCurrentLang('en')} className={`${currentLang === 'en' ? 'bg-saffron' : 'bg-gray-300'}`}>
          EN
        </Button>
        <Button onClick={() => setCurrentLang('hi')} className={`${currentLang === 'hi' ? 'bg-saffron' : 'bg-gray-300'}`}>
          HI
        </Button>
        <Button onClick={() => setCurrentLang('regional')} className={`${currentLang === 'regional' ? 'bg-saffron' : 'bg-gray-300'}`}>
          REG
        </Button>
      </div>
    </div>
  );
};

export default AudioPlayer;