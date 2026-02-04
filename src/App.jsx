import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Jackpotovi from './pages/Jackpotovi';
import Aparati from './pages/Aparati';
import Promocije from './pages/Promocije';
import Karijera from './pages/Karijera';
import PromoDetail from './pages/PromoDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="bg-[#050208] min-h-screen w-full font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/jackpotovi" element={<Jackpotovi />} />
          <Route path="/aparati" element={<Aparati />} />
          <Route path="/promocije" element={<Promocije />} />
          <Route path="/promo/:id" element={<PromoDetail />} />
          <Route path="/karijera" element={<Karijera />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}