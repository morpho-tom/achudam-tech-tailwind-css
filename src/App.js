import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ContactUs" element={<ContactUs />} /> */}
        </Routes>
      </Router>
      <Home />
    </>
  );
}

export default App;
