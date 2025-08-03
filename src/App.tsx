import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';
import ClientLogin from './pages/ClientLogin';
import ClientDashboard from './pages/ClientDashboard';
import ProductionCheck from './components/ProductionCheck';

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <About />
    <Industries />
    <Contact />
    <Newsletter />
    <Footer />
    <FloatingChat />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/client/login" element={<ClientLogin />} />
          <Route path="/client/:id" element={<ClientDashboard />} />
          <Route path="/production-check" element={<ProductionCheck />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;