// src/pages/HomePage.jsx

import Header from '../components/common/Header';
import InteractiveMap from '../components/home/InteractiveMap';
import Footer from '../components/common/Footer';
import { sites } from '../data/sites';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-center text-4xl font-bold my-8" style={{ color: 'var(--saffron)' }}>
          INDIAN CULTURAL AND HERITAGE EXPLORER
        </h1>
        <InteractiveMap sites={sites} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;