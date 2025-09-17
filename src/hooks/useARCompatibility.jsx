// src/hooks/useARCompatibility.jsx

import { useState, useEffect } from 'react';
import { isARSupported } from '../utils/arUtils';

export const useARCompatibility = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    isARSupported().then((supported) => {
      setIsSupported(supported);
      setIsLoading(false);
    });
  }, []);

  return { isSupported, isLoading };
};