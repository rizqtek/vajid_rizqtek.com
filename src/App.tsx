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
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DataAnalyticsPage from './pages/services/DataAnalyticsPage';
import AutomationToolsPage from './pages/services/AutomationToolsPage';
import WebDevelopmentPage from './pages/services/WebDevelopmentPage';
import WebsiteSEOPage from './pages/services/WebsiteSEOPage';
import AICareerToolsPage from './pages/services/AICareerToolsPage';
import SaaSSolutionsPage from './pages/services/SaaSSolutionsPage';
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
          {/* Company pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

          {/* Service detail pages */}
          <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />
          <Route path="/services/automation-tools" element={<AutomationToolsPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/website-seo" element={<WebsiteSEOPage />} />
          <Route path="/services/ai-career-tools" element={<AICareerToolsPage />} />
          <Route path="/services/saas-solutions" element={<SaaSSolutionsPage />} />
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