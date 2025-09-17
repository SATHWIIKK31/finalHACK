// src/utils/mapUtils.js

// These constants define the bounding box of India's mainland.
// We'll use these to scale the lat/lng coordinates to our 1000x1000 SVG viewbox.
const INDIA_BOUNDS = {
  minLat: 8.4,
  maxLat: 37.6,
  minLng: 68.7,
  maxLng: 97.2,
};

const SVG_WIDTH = 1000;
const SVG_HEIGHT = 1000;

/**
 * Converts geographic coordinates (lat/lng) to SVG coordinates (x/y).
 * @param {number} lat - The latitude of the location.
 * @param {number} lng - The longitude of the location.
 * @returns {{x: number, y: number}} - The calculated x and y coordinates.
 */
export const geoToSvg = (lat, lng) => {
  const { minLat, maxLat, minLng, maxLng } = INDIA_BOUNDS;

  // Linear interpolation to map longitude to SVG x-coordinate
  const x = ((lng - minLng) / (maxLng - minLng)) * SVG_WIDTH;

  // Linear interpolation to map latitude to SVG y-coordinate
  // Note: Y-axis is inverted in SVG, so we use maxLat first
  const y = ((maxLat - lat) / (maxLat - minLat)) * SVG_HEIGHT;

  return { x, y };
};