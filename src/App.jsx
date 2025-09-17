// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SiteDetailsPage from './pages/SiteDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sites/:id" element={<SiteDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;