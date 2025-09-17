// src/data/sites.js

export const sites = [
  {
    id: 'gateway-of-india',
    name: 'Gateway of India',
    location: 'Mumbai',
    coordinates: [72.83463, 18.92198], // Correct format for react-simple-maps
    description: 'One of the iconic monuments of Mumbai.',
    audio: {
      en: "/assets/audio/gateway-en.mp3",
      hi: "/assets/audio/gateway-hi.mp3",
      regional: "/assets/audio/gateway-mr.mp3", // Marathi
    },
    images: [
      { src: "/assets/images/gateway-1.jpg", alt: "A view of the Gateway of India" },
      { src: "/assets/images/gateway-2.jpg", alt: "Historic context of the Gateway" },
    ],
    model: "/assets/3d-models/gateway-of-india.glb",
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1758042662040!6m8!1m7!1s2cA2hHZOCndjkCTugAFG8w!2m2!1d18.92205951412891!2d72.83433490540155!3f118.18891729497894!4f13.80560873149173!5f0.4000000000000002",
  },
  {
    id: 'india-gate',
    name: 'India Gate',
    location: 'New Delhi',
    coordinates: [77.2295, 28.6129],
    description: 'A monument to the soldiers of the British Indian Army.',
    audio: {
      en: "/assets/audio/india-gate-en.mp3",
      hi: "/assets/audio/india-gate-hi.mp3",
      regional: "/assets/audio/india-gate-pa.mp3", // Punjabi
    },
    images: [
      { src: "/assets/images/india-gate-1.jpg", alt: "The main view of India Gate" },
      { src: "/assets/images/india-gate-2.jpg", alt: "A night view of India Gate" },
    ],
    model: "/assets/3d-models/india-gate.glb",
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1758042822434!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0V4N3J4b3dF!2m2!1d28.6129628578028!2d77.22827048858181!3f99.79655686092502!4f3.1343258865168337!5f0.7820865974627469",
  },
  {
    id: 'humayuns-tomb',
    name: "Humayun's Tomb",
    location: 'New Delhi',
    coordinates: [77.2588, 28.5936],
    description: 'The tomb of the Mughal Emperor Humayun.',
    audio: {
      en: "/assets/audio/humayun-tomb-en.mp3",
      hi: "/assets/audio/humayun-tomb-hi.mp3",
      regional: "/assets/audio/humayun-tomb-ur.mp3", // Urdu
    },
    images: [
      { src: "/assets/images/humayun-tomb-1.jpg", alt: "Front view of Humayun's Tomb" },
      { src: "/assets/images/humayun-tomb-2.jpg", alt: "Humayun's Tomb with surrounding gardens" },
    ],
    model: "/assets/3d-models/humayun-tomb.glb",
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1758042876713!6m8!1m7!1s8QLJnu7cr7YCMf0PP5W9nw!2m2!1d28.59255324048652!2d77.25077928088044!3f7.773273779194568!4f7.912909814868769!5f0.4000000000000002",
  },
  {
    id: 'sanchi-stupa',
    name: 'The Great Sanchi Stupa',
    location: 'Sanchi',
    coordinates: [77.7375, 23.4756],
    description: 'One of the oldest stone structures in India.',
    audio: {
      en: "/assets/audio/sanchi-en.mp3",
      hi: "/assets/audio/sanchi-hi.mp3",
      regional: "/assets/audio/sanchi-pa.mp3", // Punjabi
    },
    images: [
      { src: "/assets/images/sanchi-1.jpg", alt: "The Great Stupa at Sanchi" },
      { src: "/assets/images/sanchi-2.jpg", alt: "Detailed view of the Sanchi Stupa" },
    ],
    model: "/assets/3d-models/sanchi-stupa.glb",
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1758042749210!6m8!1m7!1s9x4q1dyPbxC1oE3D7f4wBg!2m2!1d23.47922674133594!2d77.73982756780724!3f326.1231800107169!4f3.090852787316095!5f0.7820865974627469",
  },
  {
    id: 'charminar',
    name: 'Charminar',
    location: 'Hyderabad',
    coordinates: [78.4747, 17.3616],
    description: 'A monument and mosque located in Hyderabad.',
    audio: {
      en: "/assets/audio/charminar-en.mp3",
      hi: "/assets/audio/charminar-hi.mp3",
      regional: "/assets/audio/charminar-te.mp3", // Telugu
    },
    images: [
      { src: "/assets/images/charminar-1.jpg", alt: "A view of the Charminar monument" },
      { src: "/assets/images/charminar-2.jpg", alt: "Close up view of Charminar arch" },
    ],
    model: "/assets/3d-models/charminar.glb",
    streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1758042278987!6m8!1m7!1sDCN19mZLnmQAAAQIt6CiuA!2m2!1d17.36147593123398!2d78.474510625907!3f74.13106785098641!4f0!5f0.7820865974627469",
  },
];