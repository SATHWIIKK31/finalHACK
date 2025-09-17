
// src/utils/arUtils.js

export const isARSupported = async () => {
  if (navigator.xr) {
    try {
      const isSupported = await navigator.xr.isSessionSupported('immersive-ar');
      return isSupported;
    } catch (e) {
      console.error("AR session check failed:", e);
      return false;
    }
  }
  return false;
};