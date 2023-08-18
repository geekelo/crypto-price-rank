import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import './components/styles/general/App.css';
import Home from './components/home';
import Cryptopage from './components/cryptopage';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptoPage/:id" element={<Cryptopage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
